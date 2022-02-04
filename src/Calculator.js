import React, { Component } from "react";
//import ReactDOM from "react-dom";

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: 0,
      num2: 0,
      result: null
    };
  }
  division = () => {
    if (this.state.num2 === 0) {
      alert("Cannot divide by zero.");
    }
    let div = this.state.num1 / this.state.num2;
    this.setState({ result: div });
  };
  multiplication = () => {
    let mul = this.state.num1 * this.state.num2;
    this.setState({ result: mul });
  };
  subtraction = () => {
    let sub = this.state.num1 - this.state.num2;
    this.setState({ result: sub });
  };
  addition = () => {
    let sum = this.state.num1 + this.state.num2;
    this.setState({ result: sum });
  };
  changeHandler1 = (event) => {
    this.setState({ num1: event.target.value });
  };
  changeHandler2 = (event) => {
    this.setState({ num2: event.target.value });
  };
  render() {
    return (
      <div>
        <label for="num1">Num1: </label>
        <input
          type="number"
          id="num1"
          name="num1"
          onChange={this.changeHandler1}
        />
        &emsp;&emsp;
        <label for="num1">Num2: </label>
        <input
          type="number"
          id="num2"
          name="num2"
          onChange={this.changeHandler2}
        />
        <br />
        <br />
        <br />
        &emsp;&emsp;
        <button onClick={this.addition}>add +</button>
        &emsp;&emsp;
        <button onClick={this.subtraction}>sub -</button>
        &emsp;&emsp;
        <button onClick={this.multiplication}>mul *</button>
        &emsp;&emsp;
        <button onClick={this.division}>div /</button>
        <br />
        <br />
        <br />
        <label for="result">Result: </label>
        <input
          type="text"
          id="result"
          name="result"
          value={this.state.result}
        />
      </div>
    );
  }
}

export default Calculator;
