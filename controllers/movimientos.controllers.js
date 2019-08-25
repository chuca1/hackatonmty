const Movimiento = require("../models/Movimiento");
const csv = require("csvtojson");

exports.getAllMovimientos = (req, res, next) => {
  Movimiento.find()
    .then(movimientos => res.status(201).json({ movimientos }))
    .catch(err => res.status(500).json(err));
};
exports.getUserIngresos = (req, res, next) => {
  const { rfc } = req.params;
  Movimiento.find({ rfc })
    .then(movimientos => {
      let ar = [];
      movimientos.map(movimiento => {
        let ingresos = {
          uuid: movimiento.uuid,
          ccyisocode: movimiento.ccyisocode,
          paymentmethod: movimiento.paymentmethod,
          subtotal: movimiento.subtotal,
          total: movimiento.total,
          placegenerated: movimiento.placegenerated,
          date: movimiento.date,
          receptorrfc: movimiento.receptorrfc,
          receptorname: movimiento.receptorname,
          productid: movimiento.productid,
          quantity: movimiento.quantity
        };
        ar.push(ingresos);
      });
      res.status(201).json(ar);
    })
    .catch(err => res.status(201).json({ err }));
};
exports.getUserIngresosYear = (req, res, next) => {
  const { rfc } = req.params;
  const { year } = req.params;
  Movimiento.find({ rfc })
    .then(movimientos => {
      let ar = [];
      movimientos.map(movimiento => {
        if (year == movimiento.date.toString().slice(11, 15)) {
          let ingresos = {
            uuid: movimiento.uuid,
            ccyisocode: movimiento.ccyisocode,
            paymentmethod: movimiento.paymentmethod,
            subtotal: movimiento.subtotal,
            total: movimiento.total,
            placegenerated: movimiento.placegenerated,
            date: movimiento.date,
            receptorrfc: movimiento.receptorrfc,
            receptorname: movimiento.receptorname,
            productid: movimiento.productid,
            quantity: movimiento.quantity,
            month: movimiento.date.toString().slice(4, 7)
          };
          ar.push(ingresos);
        }
      });
      res.status(201).json(ar);
    })
    .catch(err => res.status(201).json({ err }));
};
exports.getUserGastos = (req, res, next) => {
  const { rfc } = req.params;
  Movimiento.find({ rfc })
    .then(movimientos => {
      let ar = [];
      movimientos.map(movimiento => {
        let gastos = {
          productid: movimiento.productid,
          quantity: movimiento.quantity,
          cost: movimiento.cost
        };
        ar.push(gastos);
      });
      res.status(201).json(ar);
    })
    .catch(err => res.status(201).json({ err }));
};
exports.getUserGastosYear = (req, res, next) => {
  const { rfc } = req.params;
  const { year } = req.params;

  Movimiento.find({ rfc })
    .then(movimientos => {
      let ar = [];
      movimientos.map(movimiento => {
        if (year == movimiento.date.toString().slice(11, 15)) {
          let ingresos = {
            productid: movimiento.productid,
            quantity: movimiento.quantity,
            cost: movimiento.cost,
            month: movimiento.date.toString().slice(4, 7)
          };
          ar.push(ingresos);
        }
      });
      res.status(201).json(ar);
    })
    .catch(err => res.status(201).json({ err }));
};
exports.uploadIngreso = (req, res, next) => {
  Movimiento.create(req.body)
    .then(res.status(201))
    .catch(res.status(500));
};
exports.uploadGasto = (req, res, next) => {
  Movimiento.create(req.body)
    .then(res.status(201))
    .catch(res.status(500));
};
