const mongoose = require("mongoose");

const simpleUserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    require: [true, "Full name is required"],
  },
  photo: {
    type: String,
    default: null,
  },
});

const SimpleUser = mongoose.model("SimpleUser", simpleUserSchema);

module.exports = SimpleUser;
