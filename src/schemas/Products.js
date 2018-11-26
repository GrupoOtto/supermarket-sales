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
  salePrice: {
    type: Number,
    required: true
  },
  finalPrice: {
    type: Number,
    required: true
  }
});

module.exports = ProductSchema;
