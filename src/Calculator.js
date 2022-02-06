import React, { Component } from "react";
//import ReactDOM from "react-dom";

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: 0,
      num2: 0,
      result: 0
    };
  }
  division = () => {
    if (Number(this.state.num2) === 0 && this.state.num2 !== null) {
      alert("Cannot divide by zero.");
    }
    let div = Number(this.state.num1) / Number(this.state.num2);
    this.setState({ result: div });
  };
  multiplication = () => {
    let mul = Number(this.state.num1) * Number(this.state.num2);
    this.setState({ result: mul });
  };
  subtraction = () => {
    let sub = Number(this.state.num1) - Number(this.state.num2);
    this.setState({ result: sub });
  };
  addition = () => {
    let sum = Number(this.state.num1) + Number(this.state.num2);
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
        <label htmlFor="num1">Num1:</label>
        <input
          type="number"
          id="num1"
          name="num1"
          onChange={this.changeHandler1}
        />
        &emsp;&emsp;
        <label htmlFor="num1">Num2:</label>
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
        <p>Result: {this.state.result}</p>
      </div>
    );
  }
}

export default Calculator;
