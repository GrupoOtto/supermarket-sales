const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  _id: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  final: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
});

module.exports = ProductSchema;
