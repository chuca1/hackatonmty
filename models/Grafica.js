const { model, Schema } = require("mongoose");

const graficaSchema = new Schema(
  {
    month: String,
    descripcion: String,
    year: String,
    Ingresos: Number,
    Gastos: Number,
    userId: String
  },
  {
    versionKey: false,
    timestamps: true
  }
);
const Grafica = model("Grafica", graficaSchema);

module.exports = Grafica;
