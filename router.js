const express = require("express");
const router = express.Router()
const controller = require ('./controller');
const validator = require ('./validator');
const auth = require ('./middleware');


router
  .get("/", auth.verifyToken, controller.getUser)
  .get("/:id", controller.getUserById)
  .post("/", validator.validateUser, controller.createUser)
  .put("/:id", validator.validateUser, controller.updateUser)
  .delete("/:id", controller.deleteUser);

module.exports = router;