import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class HelloComponent extends Component {
  render() {
    return <div>Hello World {this.props.firstname}</div>;
  }
}

export default HelloComponent;
