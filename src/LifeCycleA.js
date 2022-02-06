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
  render() {
    console.log("LifeCycleA render");
    return (
      <div>
        <div>LifeCycle A</div>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
