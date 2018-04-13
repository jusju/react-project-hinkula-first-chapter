import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
  }
  resetPressed = () => {
    this.setState((prevState) => {
      return {counter: 0}
    });
  }
  incrementPressed = () => {
    this.setState((prevState) => {
      return {counter: prevState.counter + 1}
    });
  }
  decrementPressed = () => {
    this.setState((prevState) => {
      return {counter: prevState.counter - 1}
    });
  }

  render() { 
    return (
      <div>
        <div>Counter: {this.state.counter}</div>
        <button onClick={this.incrementPressed}>+</button>
        <button onClick={this.decrementPressed}>-</button>
        <button onClick={this.resetPressed}>Reset</button>
      </div>
    );
  }
}


export default Counter;
