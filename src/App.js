import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Form from './components/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayForm: false
    };
  }

  addToList(e) {
    e.preventDefault();
    console.log(e.target.name.value, e.target.offense.value);
  }

  render() {
    const { displayForm } = this.state;
    return (
      <div className="App">
        <Header displayForm={!displayForm}
        onClick={()=>this.setState({ displayForm: !displayForm })}/>
        {displayForm && <Form onSubmit={(e)=>this.addToList(e)}/>}
        <ul className="shit-list">
          To get started, edit <code>src/App.js</code> and save to reload.
        </ul>
      </div>
    );
  }
}

export default App;
