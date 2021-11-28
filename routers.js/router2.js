const express = require("express");
const router2 = express.Router()
const controler2 = require ('../controlers.js/controler2');
const validator2 = require ('../validators.js/validator2');
const auth2 = require ('../middlewares.js/middleware2');


router2
  .get("/", /*auth.verifyToken,*/ controler2.getProduct)
  .get("/:id", controler2.getProductById)
  .post("/", validator2.validateProduct, controler2.createProducts)
  .put("/:id", validator2.validateProduct, controler2.updateProduct)
  .delete("/:id", controler2.deleteProduct);

module.exports = router2;