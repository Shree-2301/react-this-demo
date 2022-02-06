import React, { Component } from "react";
import LifeCycleB from "./LIfeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "Shrinivas" };
    console.log("LifeCycleA constructor");
  }

  componentDidMount() {
    console.log("LifeCycleA ComponentDidMount");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }
  shouldComponentUpdate() {
    console.log("LifeCycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(preProps, preState) {
    console.log("LifeCycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycleA componentDidUpdate");
  }
  changeState = () => {
    this.setState({
      name: "codevolution"
    });
  };
  render() {
    console.log("LifeCycleA render");
    return (
      <div>
        <div>LifeCycle A</div>
        <button onClick={this.changeState}>Change state</button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
