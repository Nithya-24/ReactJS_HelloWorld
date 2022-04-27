import React from 'react';
import './App.css';
import logo from './assets/images/logo.png';

class App extends React.Component {
  url="https://www.bridgelabz.com/"

  constructor() {
    super() 
    this.state = {
      title: 'Hello from Bridgelabz'
    }
  }

  /**
   *  onclick Funciton
   */
  onClick = ($event) => {
    window.open(this.url,"_blank");
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} onClick={this.onClick} 
          alt="BridgeLabz Logo goes here."/>
      </div>
    )
  }
} 

export default App;