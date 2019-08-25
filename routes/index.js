const express = require("express");
let { uploadCVS, upload } = require("../bin/upload");
const router = express.Router();
const {
  getAllMovimientos,
  getUserIngresos,
  getUserGastos,
  getUserGastosYear,
  getUserIngresosYear,
  uploadIngreso,
  uploadGasto
} = require("../controllers/movimientos.controllers");
/* GET home page */
router.get("/", getAllMovimientos);
router.get("/:rfc/ingresos", getUserIngresos);
router.post("/:rfc/ingresos", uploadIngreso);
router.get("/:rfc/gastos", getUserGastos);
router.post("/:rfc/gastos", uploadGasto);
router.get("/:rfc/gastos/:year", getUserGastosYear);
router.get("/:rfc/ingresos/:year", getUserIngresosYear);


router.post("/upload", upload.single("file"), uploadCVS);
module.exports = router;
