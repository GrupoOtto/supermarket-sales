const Joi = require("joi");

exports.create = {
  body: {
    user: Joi.object({
      _id: Joi.string().allow(""),
      name: Joi.string().required(),
      email: Joi.string()
        .email()
        .required()
    }),
    shipmentInfo: Joi.object({
      province: Joi.string().required(),
      city: Joi.string().required(),
      street: Joi.string().required(),
      department: Joi.string().allow(""),
      number: Joi.string().required(),
      phone: Joi.string().required()
    }),
    creditCard: Joi.object({
      number: Joi.string()
        .creditCard()
        .required(),
      name: Joi.string().required()
    }),
    coupon: Joi.string().allow(""),
    products: Joi.array()
      .required()
      .items(
        Joi.object({
          _id: Joi.string()
            .hex()
            .required(),
          final: Joi.number().required(),
          total: Joi.number().required(),
          amount: Joi.number().required()
        })
      )
  }
};
