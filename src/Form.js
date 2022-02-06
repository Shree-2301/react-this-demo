import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comment: "",
      topic: ""
    };
  }
  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  };
  commentChangeHandler = (event) => {
    this.setState({
      comment: event.target.value
    });
  };
  topicChangeHandler = (event) => {
    this.setState({
      topic: event.target.value
    });
  };
  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`);
    event.preventDefault();
  };
  render() {
    const { username, comment, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={this.usernameChangeHandler}
          />
        </div>
        <div>
          <textarea
            value={comment}
            onChange={this.commentChangeHandler}
          ></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.topicChangeHandler}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="Vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default Form;
