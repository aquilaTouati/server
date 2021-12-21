import express from "express";
const router3 = express.Router();

import { signin, signup } from "../controlers.js/users.js";

router3.post("/signin", signin);
router3.post("/signup", signup);

export default router3;