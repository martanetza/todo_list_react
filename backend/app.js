const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.use(cors());

let tasks = [
 
];

let deletedTasks = [];

let itemId = 1;

app.get("/tasks", (req, res) => {
  res.send(tasks);
});

app.get("/deletedTasks", (req, res) => {
  res.send(deletedTasks);
});

app.post("/", (req, res) => {
  const task = {
    id: itemId++,
    name: req.body.name,
  };
  tasks.push(task);
  console.log(tasks);
  return res.send(task);
});

app.patch("/tasks/:id", (req, res) => {
  let taskUpdated = {};
  tasks = tasks.map(task => {
      if (task.id === Number(req.params.id)) {
          taskUpdated = { ...task, ...req.body, id: task.id };
          return { ...task, ...req.body, id: task.id };
      }
      return task;
  }); 
  console.log(taskUpdated)
  return res.send({ data: taskUpdated });
});

app.delete("/tasks/:id", (req, res) => {
  const task = tasks.find((task) => task.id === Number(req.params.id));
  if (!task) res.status(404).send("the task was not found");

  const index = tasks.indexOf(task);
  tasks.splice(index, 1);
  deletedTasks.push(task);
  return res.send(task);
});

app.listen(8080, (error) => {});
