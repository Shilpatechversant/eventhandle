import React, { Component } from "react";

class Demonew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      enable: false,
      textContent: 0
    };
  }

  eventincrement = () => {
    this.setState((prev, props) => ({
      counter: prev.counter + 1
    }));
  };

  eventdecrement = () => {
    this.setState((prev, props) => ({
      counter: prev.counter - 1
    }));
  };

  eventcheck = () => {
    this.setState((prev, props) => ({
      enable: !prev.enable
    }));
  };

  eventretype = (e) => {
    this.setState({
      textContent: e.target.value
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.eventincrement}> + </button>
        <button onClick={this.eventdecrement}> - </button>
        <input type="text" onChange={this.eventretype} />
        <br />
        <p>{this.state.textContent}</p>

        <p>You have Clicked {this.state.counter} Times. </p>

        <label>
          <input type="checkbox" onClick={this.eventcheck} />
        </label>
        <p>{this.state.enable ? "Enabled" : "Disabled"}</p>
      </div>
    );
  }
}

export default Demonew;
