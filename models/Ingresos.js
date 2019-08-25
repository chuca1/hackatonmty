const { model, Schema } = require("mongoose");

const ingresosSchema = new Schema(
  {
    monto: Number,
    descripcion: String,
    fecha: Date,
    userid: Numbers
  },
  {
    versionKey: false,
    timestamps: true
  }
);
const Ingresos = model("Ingresos", ingresosSchema);

module.exports = Ingresos;
