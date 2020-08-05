import React, { Component } from "react";

class CounterClass extends Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState({
        counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div>
        <h1>Clicked {this.state.counter} times</h1>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default CounterClass;
