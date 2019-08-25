const { model, Schema } = require("mongoose");

const movimientoSchema = new Schema(
  {
    rfc: String,
    uuid: String,
    ccyisocode: String,
    ccyfx: String,
    paymentmethod: Number,
    paymenttype: String,
    subtotal: String,
    total: String,
    placegenerated: Number,
    date: Date,
    receptorname: String,
    emisorrfc: String,
    emisorname: String,
    status: String,
    productid: Number,
    quantity: Number,
    cost: String
  },
  {
    versionKey: false,
    timestamps: true
  }
);
const Movimiento = model("Movimiento", movimientoSchema);

module.exports = Movimiento;
