const Joi = require("joi");

exports.create = {
  body: {
    user: Joi.object({
      _id: Joi.string().hex(),
      name: Joi.string().required(),
      email: Joi.email().required()
    }),
    shipmentInfo: Joi.object({
      province: Joi.string().required(),
      city: Joi.string().required(),
      street: Joi.string().required(),
      department: Joi.string(),
      number: Joi.string().required(),
      phone: Joi.string().required()
    }),
    creditCard: Joi.object({
      number: Joi.string()
        .creditCard()
        .required(),
      name: Joi.string().required()
    }),
    date: Joi.date().required(),
    coupon: Joi.string().required(),
    products: Joi.array()
      .required()
      .items(
        Joi.object({
          _id: Joi.string()
            .hex()
            .required(),
          salePrice: Joi.number().required(),
          finalPrice: Joi.number().required(),
          amount: Joi.number().required()
        })
      )
  }
};
