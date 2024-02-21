require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const bcrypt = require("bcrypt");

const { connectDB } = require("./config/db");
const Task = require("./models/tasksModel");
const User = require("./models/userModel");

const port = process.env.PORT || 5000;

app.use(bodyParser.json());

const checkExist = (task, res, err) => {
  if (!task) {
    return res.status(404).json({ message: err ?? "Помилка запиту" });
  }
};

const serverError = (err, res) => {
  if (err) return res.status(500).json({ error: err.message });
};

app.get("/", (req, res) => {
  res.send("Hello, Express");
});

app.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, role } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hash,
      role,
    });

    return res.status(201).json({ firstName, lastName, email });
  } catch (error) {
    console.error("Register error: ", error);
    serverError(error, res);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password: pass } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const isValid = await bcrypt.compare(pass, user.password);

    if (!isValid) {
      return res.status(400).json({
        message: "Invalid password or email",
      });
    }

    const { password, ...userData } = user._doc;

    return res.status(200).json(userData);
  } catch (error) {
    console.error("Register error: ", error);
    serverError(error, res);
  }
});

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();

    return res.status(200).json(tasks);
  } catch (error) {
    console.error("Tasks fetching error: ", error);
    serverError(error, res);
  }
});

app.get("/tasks/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findById(id);

    return res.status(200).json(task);
  } catch (error) {
    console.error("Task fetching error: ", error);
    serverError(error, res);
  }
});

app.post("/tasks", async (req, res) => {
  try {
    const newTask = req.body;

    const task = await Task.create({ text: newTask.text });

    checkExist(task, res, "Завдання не створене");

    return res.status(201).json(task);
  } catch (error) {
    console.error("Task creation error: ", error);
    serverError(error, res);
  }
});

app.put("/tasks/:id", async (req, res) => {
  try {
    const { text, isCompleted } = req.body;
    const id = req.params.id;

    const task = await Task.findByIdAndUpdate(
      id,
      {
        text,
        isCompleted,
      },
      { new: true }
    );

    return res.status(201).json(task);
  } catch (error) {
    console.error("Task updating error: ", error);
    serverError(error, res);
  }
});

app.delete("/tasks/:id", async (req, res) => {
  try {
    const id = req.params.id;

    await Task.findByIdAndDelete(id);

    return res.status(204).send();
  } catch (error) {
    console.error("Task deleting error: ", error);
    serverError(error, res);
  }
});

app.listen(port, () => {
  // db connection check
  connectDB(process.env.MONGO_URI);
  console.log(`Server listening on http://localhost:${port}`);
});
