import React, { Component } from 'react';
import axios from 'axios';

import './reset.css';
import './App.css';


import Header from './components/Header';
import Form from './components/Form';

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

  listItemTemplate(listData) {
    return listData.map((item) => {
      return  <li key={item.id} className={item.status ? 'forgiven' : 'grudging'}>
                <p>{item.name}</p>
                <p>{item.offense}</p>
                <p>{item.status}</p>
              </li>
    });
  }

  render() {
    const { displayForm, listData } = this.state;
    let listItems = this.listItemTemplate(listData)

    return (
      <div className="App">
        <Header displayForm={!displayForm}
        onClick={()=>this.setState({ displayForm: !displayForm })}/>
        {displayForm && <Form onSubmit={(e)=>this.addToList(e)}/>}
        <ul className="shit-list">
          {listItems}
        </ul>
      </div>
    );
  }
}

export default App;
