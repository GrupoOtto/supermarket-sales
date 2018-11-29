const mongoose = require("mongoose");
const ProductSchema = require("../schemas/Products");
const CreditCardSchema = require("../schemas/CreditCard");
const ShipmentInfoSchema = require("../schemas/ShipmentInfo");
const UserSchema = require("../schemas/User");

const SaleSchema = new mongoose.Schema({
  user: UserSchema,
  shipmentInfo: ShipmentInfoSchema,
  creditCard: CreditCardSchema,
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  coupon: String,
  products: [ProductSchema]
});

SaleSchema.method({});

SaleSchema.statics = {};

module.exports = mongoose.model("Sale", SaleSchema);
