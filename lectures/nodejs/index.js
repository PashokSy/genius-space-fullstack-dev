const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = 3000;

let tasks = [
  {
    id: 1,
    text: "Read a book",
  },
  {
    id: 2,
    text: "Walk a dog",
  },
  {
    id: 3,
    text: "Cook meal",
  },
  {
    id: 4,
    text: "Call mom",
  },
];

app.use(bodyParser.json());

const checkExist = (id, res) => {
  const foundTask = tasks.find((task) => task.id === id);

  if (!foundTask) {
    return res.status(404).json({ message: "Task not found" });
  }
};

app.get("/", (req, res) => {
  res.send("Hello, Express");
});

app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

app.post("/tasks", (req, res) => {
  const newTask = req.body;

  const newTaskId = tasks.at(-1).id + 1;
  tasks.push({ id: newTaskId, text: newTask.text });

  res.status(201).json(tasks);
});

app.put("/tasks/:id", (req, res) => {
  const updatedTask = req.body;
  const taskId = parseInt(req.params.id);

  checkExist(taskId, res);

  foundTask.text = updatedTask.text;

  res.status(200).json(foundTask);
});

app.delete("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);

  checkExist(taskId, res);

  tasks = tasks.filter((t) => t.id !== taskId);

  res.status(204).json(tasks);
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
