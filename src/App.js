import React, { Component } from 'react';
import axios from 'axios';

import './reset.css';
import './App.css';

import Header from './components/Header';
import Form from './components/Form';
import DeleteSvg from './components/DeleteSvg';
import Chart from './components/ChartJs';

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayForm: false,
      listData: []
    };
  }

  componentDidMount() {
    axios.get('/list')
    .then(r => {
      this.setState({ listData: r.data.list });
    }).catch(err => console.log(err));
  }

  addToList(e) {
    e.preventDefault();
    const { name, offense } =  e.target
    axios.post('/post', {
      name: name.value,
      offense: offense.value
    }).then(r => this.setState({ listData: r.data.list}))
    .catch(err => console.log(err));
  }

  updateRecord(item, key, value) {
    item[key] = value;
    axios.post(`http://localhost:3001/api/post/${item.id}`, item)
    .then(r => this.setState({ listData: r.data.list }))
    .catch(err => console.log(err));
  }

  listItemTemplate(listData) {
    return listData.map((item, index) => {
      return  <li key={index}
                  onClick={()=>this.selectPerson(index)}
                  className={item.status ? 'forgiven' : 'grudging'}>
                {item.name}
              </li>
    });
  }

  detailedItemTemplate(item) {
    return <section className={item.status ? 'forgiven' : 'grudging'}>
              <div className="item-header">
                <p>Who done it? {item.name}</p>
                <button className="item-button"
                  onClick={()=>this.updateRecord(item, 'status', !item.status)}
                >
                  {item.status ? "Grudge-On" : "Forgive"}
                </button>
              </div>
              <p>What did they do? {item.offense}</p>
            </section>
  }

  selectPerson(index) {
    let selectedPerson = this.state.listData[index]
    this.setState({ selectedPerson })
    console.log(this.state.selectedPerson, index);
  }

  countGrudges(listData) {
    let dataset = [0, 0]
    if (!listData.length) return dataset
    listData.forEach((item) => {
      if (item.status) dataset[0]++
      else dataset[1]++
    })
    return dataset;
  }

  render() {
    const { displayForm, listData, selectedPerson } = this.state;
    let listItems = this.listItemTemplate(listData)
    let detailedItem = selectedPerson && this.detailedItemTemplate(selectedPerson)
    let dataset = this.countGrudges(listData)

    return (
      <div className="App">
        <Header displayForm={!displayForm}
        onClick={()=>this.setState({ displayForm: !displayForm })}/>
        {displayForm && <Form onSubmit={(e)=>this.addToList(e)}/>}
        <div className="content">
          <ul className="list-preview">
            {listItems}
          </ul>
          <section className="detailed-view">
            {selectedPerson ? detailedItem : <p className="nobody-selected">nobody selected</p>}
          </section>
        </div>
        <Chart dataset={dataset}/>
      </div>
    );
  }
}

export default App;
