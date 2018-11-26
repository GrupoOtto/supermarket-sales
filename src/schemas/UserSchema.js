const mongoose = require("mongoose");

const UserSchemaSchema = new mongoose.Schema({
  _id: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true
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
