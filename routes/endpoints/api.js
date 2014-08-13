var express = require("express");
var router = express.Router();
var lezhi = lezhi || {};
lezhi.userAuth = require("./authentication.js");

router.post('/login', function(req, res){
  return lezhi.userAuth.login(req, res);
});

router.post('/register', function(req, res){
  return lezhi.userAuth.register(req, res);
});
module.exports = router;
