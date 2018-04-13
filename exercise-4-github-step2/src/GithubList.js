import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class GithubList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listItems: [], name: '' };
  }


  searchAction = () => {
    fetch("https://api.github.com/search/repositories?q=" + this.state.name)
    .then(response => response.json())
    .then(responseData => {
      this.setState({
        listItems: responseData.items
      });
    });
  }


  inputChanged = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    const itemRows = this.state.listItems.map((repository, index) => (
      <tr key={index}>
        <td>{repository.full_name}</td>
        <td>
          <a href={repository.html_url}>
            {"http://github.com/" + repository.full_name}
          </a>
        </td>
      </tr>
    ));

    return (
      <div>
        <input type="text" value={this.state.name} onChange={this.inputChanged} />
        <button onClick={this.searchAction}>Search</button>
        <h2>Repositories</h2>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>URL</th>
            </tr>
            {itemRows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default GithubList;
