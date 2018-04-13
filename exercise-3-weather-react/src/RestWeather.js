import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class RestWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {weather: '', temperature: '', imgurl: ''};
  }
  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Helsinki&APPID=a8720cf3a65bd981b2fecc6381cd729e&units=metric')
    .then((response) => response.json()) 
    .then((responseData) => { 
       console.log(responseData);
        this.setState({ 
          weather: responseData.weather[0].main,
          temperature: responseData.main.temp,
          imgurl: "http://openweathermap.org/img/w/" + responseData.weather[0].icon + ".png"
        }); 
    });
  }
  
  render() { 
    return (
      <div>
        <div>Temperature: {this.state.temperature} Celsius</div>
        <div>Weather: {this.state.weather}</div>
        <div><img src={this.state.imgurl} /></div>
      </div>
    );
  }
}

export default RestWeather;
