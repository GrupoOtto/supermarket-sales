const mongoose = require("mongoose");

const UserSchemaSchema = new mongoose.Schema({
  _id: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

module.exports = UserSchemaSchema;
