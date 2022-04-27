import React from 'react';
import './App.css';
import logo from './assets/images/logo.png';

class App extends React.Component {
  url="https://www.bridgelabz.com/"

  constructor() {
    super() 
    this.state = {
     // title: 'Hello from Bridgelabz'
     userName: ''
    }
  }

  /**
   *  onclick Funciton
   */
  onClick = ($event) => {
    window.open(this.url,"_blank");
  }

   /**
   * onChange event listener is used to invoke this func
   * @param {*} event 
   */
    onNameChange = (event) => {
      this.setState({ userName: event.target.value})
    }
  
    render() {
      return (
        <>
          <div>
            <h1>Hello {this.state.userName} from BridgeLabz</h1>
            <img src={logo} onClick={this.onClick} 
              alt="BridgeLabz Logo goes here."/>
          </div>
          <div>
            <h1><input onChange={this.onNameChange} /> </h1>
          </div>
        </>
      )
    }
  } 
  
  export default App;