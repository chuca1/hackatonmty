const express = require("express");
const router = express.Router();
const {
  getAllMovimientos,
  getUserIngresos,
  getUserGastos,
  getUserGastosYear
} = require("../controllers/movimientos.controllers");
/* GET home page */
router.get("/", getAllMovimientos);
router.get("/:rfc/ingresos", getUserIngresos);
router.get("/:rfc/gastos", getUserGastos);
router.get("/:rfc/gastos/:year", getUserGastosYear);
module.exports = router;
