const { model, Schema } = require("mongoose");

const ingresosSchema = new Schema(
  {
    monto: Number,
    descripcion: String,
    fecha: Date,
    userid: String
  },
  {
    versionKey: false,
    timestamps: true
  }
);
const Ingresos = model("Ingresos", ingresosSchema);

module.exports = Ingresos;
