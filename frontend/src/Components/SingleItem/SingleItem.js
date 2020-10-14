import React, { Component } from "react";
import "./singleItem.css";
import { FaTrashAlt } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';


class SingleItem extends Component {
  state = {
    style: {
      display: "none"
    },
    taskName: ""
  }
 
  deleteTaskHandler = () => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
     };
    fetch(`http://localhost:8080/tasks/${this.props.id}`, requestOptions)
      .then((response) => response.json())
      .then((response) => this.props.taskToDelete(response.data));
  }

  openModalHandler = () => {
    this.setState({
      style: {
        display: "flex"
      }
    });
  }

  updateTaskHandler = () => {
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: this.state.taskName }),
    };
    fetch(`http://localhost:8080/tasks/${this.props.id}`, requestOptions)
      .then((response) => response.json())
      .then((response) => this.props.taskToUpdate(response.data));

    this.setState({
      style: {
        display: "none"
      }
    });
  }

  render() {
    return (
      <div className="Single_item">
        <p>name:{this.props.name}</p>
        <div>
          <button onClick={this.openModalHandler}><AiFillEdit/></button>
          <button onClick={this.deleteTaskHandler}><FaTrashAlt /></button>
        </div>
        <div style={this.state.style} className="Modal">
          <input type="text" placeholder={this.props.name} onChange={(event) => this.setState({taskName: event.target.value})} />
          <button onClick={this.updateTaskHandler}>update</button>
        </div>
      </div>
    );
  }
}

export default SingleItem;
