const Sale = require("../models/Sale");

exports.all = async args => Sale.find(args);
exports.get = async _id => Sale.findById({ _id });
exports.create = async args => Sale.create(args);
