const express = require("express");
const app = express();
const router = require("./router");
const multer = require("multer");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.use("/users", router);
mongoose.connect(
  "mongodb://akilaT:strodix1997@cluster0-shard-00-00.rj5tw.mongodb.net:27017,cluster0-shard-00-01.rj5tw.mongodb.net:27017,cluster0-shard-00-02.rj5tw.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-3qusrp-shard-0&authSource=admin&retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);

/*File Uploader*/
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage }).array("file");
app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json(err);
    }

    return res.status(200).send(req.files);
  });
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("Base de données connectée!");
});
app.all("*", (req, res) => {
  res.status(404).send({
    message: "Route not found",
  });
});
app.listen(5000, () => {
  console.log("Listen on http://localhost:5000");
});
