const { model, Schema } = require("mongoose");

const empleadoSchema = new Schema(
  {
    nombre: String,
    edad: Number,
    posicion: String,
    sueldo: Number,
    departamento: String
  },
  {
    versionKey: false,
    timestamps: true
  }
);
const Empleado = model("Empleado", empleadoSchema);

module.exports = Empleado;
