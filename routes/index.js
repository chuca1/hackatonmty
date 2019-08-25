const express = require("express");
const passport = require("../config/passport");

const router = express.Router();
const {
  signup,
  login,
  logut,
  profile
} = require("../controllers/auth.controllers");
const {
  getAllMovimientos,
  getUserIngresos,
  getUserGastos,
  getUserGastosYear,
  getUserIngresosYear
} = require("../controllers/movimientos.controllers");

const { verifyToken } = require("../config/jwt");
/* GET home page */
router.get("/", getAllMovimientos);
router.get("/:rfc/ingresos", getUserIngresos);
router.get("/:rfc/gastos", getUserGastos);
router.get("/:rfc/gastos/:year", getUserGastosYear);
router.get("/:rfc/ingresos/:year", getUserGastosYear);
module.exports = router;

/* GET home page */
router.post("/signup", signup);
router.post("/login", passport.authenticate("local"), login);
router.get("/logout", logut);
router.get("/profile", verifyToken, profile);
module.exports = router;
