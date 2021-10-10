const Joi = require("joi");
const validateUser = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().max().required(),
    username: Joi.string().max(10).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(10).required(),
  });
  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(400).send({
      message: result.error,
    });
  }
  next();
};

module.exports = {
  validateUser,
};