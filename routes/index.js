var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res){
  if(req.session.user){
    return res.redirect('/'+req.session.user.email);
  }else{
    return res.redirect('/login')
  }
})
router.get('/login', function(req, res) {
  messageHash = {
    userNotExist:"用户不存在，检查用户名是否正确。",
    passwordDoesntMatch: "用户名与密码不相符。",
  }
  res.render('login', { title: 'Express' , message: messageHash});
});

module.exports = router;
