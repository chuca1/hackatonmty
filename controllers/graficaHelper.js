let Grafica = require("../models/Grafica");

exports.createGraphData = async (req, res) => {
  let { graphData, RFC, year } = req.body;
  let resData = [];
  console.log(graphData);
  graphData.forEach(month => {
    resData.push(new Grafica(month));
  });
  try {
    let result = await Grafica.insertMany(resData);
    res.send({ success: 1, data: result });
  } catch (err) {
    res.send({ success: 0, data: err });
  }
};

exports.getGraphData = async (req, res) => {
  try {
    let result = await Grafica.find({
      userId: req.params.RFC,
      year: req.params.year
    });
    res.send({ success: 1, data: result });
  } catch (err) {
    res.send({ success: 0, data: err.message });
  }
};
