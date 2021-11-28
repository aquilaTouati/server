const Joi = require("joi");
const validateProduct = (req, res, next) => {
  const schema = Joi.object({
    nom: Joi.string().required(),
    catégorie: Joi.string().required(),
    prix: Joi.string().email().required(),
    etat: Joi.string().required(),
    wilaya: Joi.string().required(),
    dsecription: Joi.string(),
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
  validateProduct,
};