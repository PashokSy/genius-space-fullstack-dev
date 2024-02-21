const mongoose = require("mongoose");

const tasksSchema = new mongoose.Schema({
  text: {
    type: "string",
    require: [true, "Task description is required"],
  },
  isCompleted: {
    type: "boolean",
    default: false,
  },
});

const Task = mongoose.model("Task", tasksSchema);

module.exports = Task;
