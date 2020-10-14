import React, { Component } from "react";
import DeletedItem from "../../../Components/DeletedItem/DeletedItem";

class DeletedTasks extends Component{

  state = { 
    deletedTasks: []
  }

  render () {
    return(
    <div className="list">
      <h2>Deleted items</h2>
      {this.state.deletedTasks.map(item => {
        return <DeletedItem key={item.id} name={item.name} />
      })
      }
    </div>
    )
  }

  componentDidMount() {
    fetch("http://localhost:8080/deletedTasks")
      .then((res) => res.json())
      .then((data) => this.setState({deletedTasks: data}));   
  }
}


export default DeletedTasks