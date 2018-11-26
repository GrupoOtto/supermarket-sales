const Joi = require("joi");

exports.create = {
  body: {
    creditCard: Joi.string()
      .creditCard()
      .required(),
    date: Joi.date().required(),
    user: Joi.string()
      .hex()
      .required(),
    products: Joi.array()
      .required()
      .items(
        Joi.object({
          _id: Joi.string()
            .hex()
            .required(),
          salePrice: Joi.number().required(),
          finalPrice: Joi.number().required()
        })
      )
  }
};
