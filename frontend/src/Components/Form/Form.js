import React, { Component } from "react";
import "./form.css";
import { GrAdd } from 'react-icons/gr';

class From extends Component {
  state = {
    taskName: "",
  };

  saveTaskNameHandler = (event) => {
    this.setState({ taskName: event.target.value });
  };

  postTaskHandler = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: this.state.taskName }),
    };
    fetch("http://localhost:8080/", requestOptions)
      .then((response) => response.json())
      .then((response) => this.props.getTask(response.data));
  }

  render() {
    return (
      <div className="form">
        <input
          onChange={(event) => this.saveTaskNameHandler(event)}
          type="text"
          placeholder="type in a new task"
        />
        <button onClick={() => this.postTaskHandler()}>
          <GrAdd />
        </button>
      </div>
    );
  }
}

export default From;
