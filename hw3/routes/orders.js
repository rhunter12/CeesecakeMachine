var express = require('express');
var router = express.Router();

var myJson = { 
  "data":[
    {"topping":"cherry", "quantity":"2"},
    {"topping":"plain", "quantity":"6"},
    {"topping":"chocolate", "quantity":"3"}
  ]
}

router.post('/', function(req, res, next) {
  res.json(myJson);
});

module.exports = router;
