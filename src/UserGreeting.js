import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };
  }
  render() {
    return this.state.isLoggedIn ? 
      <div>Welcome Shrinivas!</div>: 
      <div>Welcome Guest!</div>;
    // let message
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Shrinivas!</div>;
    // } else {
    //   message = <div>Welcome Guest!</div>;
    // }
    // return message
  }
}
export default UserGreeting;
