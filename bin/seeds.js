const csv = require("csvtojson");
const csvFilePath = __dirname + "/JXA0004269K14.csv";
const mongoose = require("mongoose");
const Movimiento = require("../models/Movimiento");
require("dotenv").config();

csv()
  .fromFile(csvFilePath)
  .then(jsonObj => {
    mongoose
      .connect(process.env.DB, { useNewUrlParser: true })
      .then(async () => {
        const movimiento = await Movimiento.create(jsonObj);
        console.log(`${movimiento.length}, movimienots created`);
        mongoose.connection.close();
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
