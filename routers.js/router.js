const express = require("express");
const router = express.Router()
const controler = require ('../controlers.js/controler');
const validator = require ('../validators.js/validator');
const auth = require ('../middlewares.js/middleware');


router
  .get("/", auth.verifyToken, controler.getUser)
  .get("/:id", controler.getUserById)
  .post("/", validator.validateUser, controler.createUser)
  .put("/:id", validator.validateUser, controler.updateUser)
  .delete("/:id", controler.deleteUser);

module.exports = router;