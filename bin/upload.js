const PORT = process.env.PORT;
const express = require("express");
const app = express();
const csv = require("csvtojson");
const mongoose = require("mongoose");
const Movimiento = require("../models/Movimiento");
require("dotenv").config();
const path = require("path");
const multer = require("multer");
const uri =
  "mongodb+srv://chuca:1234@cluster0-75beg.mongodb.net/test?retryWrites=true&w=majority";
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  }
});

exports.upload = multer({ storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

exports.uploadCVS = (req, res) => {
  console.log(req.file.path);

  csv()
    .fromFile(req.file.path)
    .then(jsonObj => {
      mongoose
        .connect(uri, { useNewUrlParser: true })
        .then(async () => {
          const movimiento = await Movimiento.create(jsonObj);
          console.log(`${movimiento.length}, movimienots created`);
          mongoose.connection.close();
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};
