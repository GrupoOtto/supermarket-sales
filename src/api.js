const status = require("http-status");
const error = require("http-errors");
const validate = require("express-validation");
const salesValidator = require("./validators/sales");
const salesController = require("./controllers/sales");

const handle = fn => (req, res, next) => fn(req, res, next).catch(next);

module.exports = app => {
  app.post(
    "/",
    validate(salesValidator.create),
    handle(async (req, res) => {
      if (req.body.creditCard === "4556525776869113")
        throw error(400, "Invalid credit card");
      res.status(status.CREATED).json(await salesController.create(req.body));
    })
  );

  app.get(
    "/",
    handle(async (req, res) => {
      res.status(status.CREATED).json(await salesController.all());
    })
  );

  app.get(
    "/:id",
    handle(async (req, res) => {
      res.status(status.CREATED).json(await salesController.get(req.params.id));
    })
  );

  app.delete(
    "/:id",
    handle(async (req, res) => {
      res.status(status.OK).json(await salesController.delete(req.params.id));
    })
  );
};
