import React, { Component } from "react";
import DeletedItem from "../../Components/DeletedItem/DeletedItem";

class DeletedTasks extends Component{

  state = { 
    deletedTasks: []
  }

  componentDidMount() {
    fetch("http://localhost:8080/deletedTasks")
      .then((res) => res.json())
      .then((res) => this.setState({deletedTasks: res.data}));   
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
}


export default DeletedTasks