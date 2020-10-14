import React, { Component } from "react";
import From from "../../Components/Form/Form";
import SingleItem from "../../Components/SingleItem/SingleItem";

 
class List extends Component {
  state = {
    tasks: [],
  };
  addItemHandler = (task) => {
    let tasks = [...this.state.tasks]
    tasks.push(task)
    this.setState({
      tasks:tasks
    })
  };
  deleteTaskHandler = (task) => {
    const taskIndex = this.state.tasks.findIndex((item) => {
      return item.id === task.id;
    });
    let tasks = [...this.state.tasks]
    tasks.splice(taskIndex, 1);
    this.setState({
      tasks: tasks,
    });
   };
  render() {
    return (
      <div className="list">
        <h2>To do tasks</h2>
        <From getTask={(task) => this.addItemHandler(task)} />
        {this.state.tasks.map((item) => {
          return (
            <SingleItem
              key={item.id}
              id={item.id}
              name={item.name}
              taskToDelete={(task)=>this.deleteTaskHandler(task)}
             />
          );
        })}
      </div>
    );
  }
  componentDidMount() {
    fetch("http://localhost:8080/tasks")
      .then((res) => res.json())
      .then((data) => this.setState({ tasks: data }));
   
  }
}

export default List;
