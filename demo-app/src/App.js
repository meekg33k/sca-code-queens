import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    message: "",
  }
  greeting = (e) =>{
    e.preventDefault();
    this.setState({
      message: "hey there!!"
    })
  }
  render() {
    return (
      <div className="App">
        <button onClick = {this.greeting}>greet</button>
        <p>{this.state.message}</p>
      </div>
    );
  }
  
}

export default App;
