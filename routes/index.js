const express = require("express");
let { uploadCVS, upload } = require("../bin/upload");
const router = express.Router();
const {
  getAllMovimientos,
  getUserIngresos,
  getUserGastos,
  getUserGastosYear,
  getUserIngresosYear
} = require("../controllers/movimientos.controllers");
/* GET home page */
router.get("/", getAllMovimientos);
router.get("/:rfc/ingresos", getUserIngresos);
router.get("/:rfc/gastos", getUserGastos);
router.get("/:rfc/gastos/:year", getUserGastosYear);
router.get("/:rfc/ingresos/:year", getUserGastosYear);

router.post("/upload", upload.single("file"), uploadCVS);
module.exports = router;
