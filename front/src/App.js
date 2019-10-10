import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textSend: "",
      textUpper: ""
    };
  }

  getText(value) {
    fetch(`http://localhost:5000/upperCase?text=${value}`)
      .then(res => res.json())
      .catch(error => console.log(error))
      .then(res => this.setState({ textUpper: res }));
  }

  handleText = event => {
    event.preventDefault();
    this.setState({ textSend: event.target.value });
  };

  handleClick = event => {
    event.preventDefault();
    this.getText(this.state.textSend);
  };

  render() {
    return (
      <div className="App">
        <form>
          <p>Enter text:</p>
          <input className="el" type="text" onChange={this.handleText} />
          <button className="el" type="submit" onClick={this.handleClick}>
            MAYUS
          </button>
          <p className="el"> {this.state.textUpper} </p>
        </form>
      </div>
    );
  }
}

export default App;
