const mongoose = require("mongoose");

const CreditCardSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

module.exports = CreditCardSchema;
