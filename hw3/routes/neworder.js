//Ryan Hunter-Bliss

var express = require('express');
var router = express.Router();

var connection = require('./dbms');


  router.route('/')
  .post(function(req, res, next) {
    var d = new Date();
    var n = d.getDay();

    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    var m = monthNames[d.getMonth()];

    var qty = req.body.quantity;
    var topping = req.body.toppings;
    var notes = req.body.note;

    var sqlInsert = "insert into ORDERS values (" + Math.random()*1000 + ", '" + m + "', " + n + ", " + qty + ", '" + topping + "', '" + notes + "')";

    connection.dbquery(
      sqlInsert,
      function(error, results, fields) {
        if (error) throw error;
        res.send("It works!");
      }
    );
  });


module.exports = router;