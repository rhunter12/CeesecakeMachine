//Ryan Hunter-Bliss

var express = require('express');
var router = express.Router();

var connection = require('./dbms');


  router.route('/')
  .post(function(req, res, next) {
    connection.dbquery(
      req.body.query,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
  });


module.exports = router;
