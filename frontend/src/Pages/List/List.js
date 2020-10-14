import React, { Component } from "react";
import From from "../../Components/Form/Form";
import SingleItem from "../../Components/SingleItem/SingleItem";

 
class List extends Component {
  state = {
    tasks: [],
  };

  addItemHandler = (task) => {
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  };

  updateTaskHandler = (taskToUpdate) => {
    let tasks = [];
    tasks = this.state.tasks.map(task => {
      if (task.id === Number(taskToUpdate.id)) {
          return { ...task, ...taskToUpdate};
      }
      return task;
    }); 
    this.setState({
      tasks: tasks
    })
    console.log(this.state.tasks)
  };
  
  deleteTaskHandler = (task) => {
    const tasks = this.state.tasks.filter((item) =>  item.id !== task.id);
    this.setState({
      tasks: tasks,
    });
  };

  componentDidMount() {
    fetch("http://localhost:8080/tasks")
      .then((res) => res.json())
      .then((data) => this.setState({ tasks: data }));
  }

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
              taskToUpdate={(task)=>this.updateTaskHandler(task)}
              taskToDelete={(task)=>this.deleteTaskHandler(task)}
             />
          );
        })}
      </div>
    );
  }
}

export default List;
