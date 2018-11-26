const mongoose = require("mongoose");

const ShipmentInfoSchema = new mongoose.Schema({
  province: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  department: String,
  number: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
});

module.exports = ShipmentInfoSchema;
