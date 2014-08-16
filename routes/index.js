var express = require('express');
var router = express.Router();
var lezhi = lezhi || {};
lezhi.home = require('./home');

/* GET home page. */
router.get('/', function(req, res){
  if(req.session.user){
    return res.redirect('/home');
  }else{
    return res.redirect('/login')
  }
});

router.get('/login', function(req, res) {
  messageHash = {
    userNotExist:"用户不存在，检查用户名是否正确。",
    passwordDoesntMatch: "用户名与密码不相符。",
  }
  return res.render('login', { title: 'Login' , message: messageHash});
});

router.get('/home', function(req ,res){
  return lezhi.home.getHomePage(req, res);
});
module.exports = router;
