import React, { Component } from "react";
import "./singleItem.css";
import { FaTrashAlt } from 'react-icons/fa';


class SingleItem extends Component {
 
  deleteTaskHandler = () =>{
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
     };
    fetch(`http://localhost:8080/tasks/${this.props.id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => this.props.taskToDelete(data));
  }
  render() {
    return (
      <div className="Single_item">
        <p>name:{this.props.name}</p>
        <button onClick={() => this.deleteTaskHandler()}><FaTrashAlt /></button>
      </div>
    );
  }
}

export default SingleItem;
