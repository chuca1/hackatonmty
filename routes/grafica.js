const express = require("express");
const router = express.Router();

const {
  getGraphData,
  createGraphData
} = require("../controllers/graficaHelper");

/* GET home page */
router.get("/:RFC/:year", getGraphData).post("/", createGraphData);
module.exports = router;
