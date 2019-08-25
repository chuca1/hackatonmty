const { model, Schema } = require("mongoose");
const empresaSchema = new Schema(
  {
    profit: Number,
    gastos: Number,
    ingresos: Number,
    userID: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Empresa = model("Empresa", empresaSchema);

module.exports = Empresa;
