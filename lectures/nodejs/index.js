require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const sqlite3 = require("sqlite3").verbose();

const { connectDB } = require("./config/db");
const Task = require("./models/tasksModel");

const dbName = "tasks.db";
const port = process.env.PORT || 5000;

const db = new sqlite3.Database(dbName);

app.use(bodyParser.json());

const checkExist = (id, res) => {
  db.all("SELECT * FROM tasks", (err, row) => {
    serverError(err, res);

    if (!row) {
      return res.status(404).json({ message: "Task not found" });
    }
  });
};

const serverError = (err, res) => {
  if (err) return res.status(500).json({ error: err.message });
};

app.get("/", (req, res) => {
  res.send("Hello, Express");
});

app.get("/tasks", (req, res) => {
  db.all("SELECT * FROM tasks", (err, row) => {
    serverError(err, res);

    res.status(200).json(row);
  });
});

app.get("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);

  db.get("SELECT * FROM tasks WHERE id = ?", id, (err, row) => {
    serverError(err, res);
    checkExist(row, res);

    return res.status(200).json(row);
  });
});

app.post("/tasks", (req, res) => {
  const newTask = req.body;

  db.run("INSERT INTO tasks (text) VALUES (?)", [newTask.text], (err) => {
    serverError(err, res);

    res.status(201).send();
  });
});

app.put("/tasks/:id", (req, res) => {
  const { text } = req.body;
  const id = parseInt(req.params.id);

  db.run("UPDATE tasks SET text = ? WHERE id = ?", [text, id], (err) => {
    serverError(err, res);

    return res.status(200).json({ id, text });
  });
});

app.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);

  db.run("DELETE FROM tasks WHERE id = ?", id, (err) => {
    serverError(err, res);

    return res.status(204).send();
  });
});

app.listen(port, () => {
  // db connection check
  connectDB(process.env.MONGO_URI);
  console.log(`Server listening on http://localhost:${port}`);
});
