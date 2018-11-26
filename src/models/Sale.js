const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  _id: {
    type: mongoose.SchemaTypes.ObjectId,
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

const SaleSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true
  },
  products: [ProductSchema]
});

SaleSchema.method({});

SaleSchema.statics = {};

module.exports = mongoose.model("Sale", SaleSchema);
