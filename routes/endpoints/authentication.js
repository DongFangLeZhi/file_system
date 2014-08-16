var User = require("../../models/User");
var crypto = require("crypto");

exports.login = function(req, res){
  var email = req.body.email;
  var md5 = crypto.createHash('md5');
  var password = md5.update(req.body.password).digest("base64");
  User.findOne({email:email}, function(err, user){
    if(!user){
      return res.send({code:111, message:"用户不存在，检查用户名是否正确。"});
    }
    if(user.password != password){
      return res.send({code:112, message:"用户名与密码不相符。"});
    }
    req.session.user = user;
    req.session.sUser = {
      email:user.email,
      clearance: user.clearance
    }
    return res.send({code:200, message:"登录成功!", user: {email: user.email, clearance: user.clearance}});
  });
}

exports.register = function(req, res){
  var md5 = crypto.createHash('md5');
  var password = md5.update(req.body.password).digest("base64");
  new User({email:req.body.email, password:password, clearance:req.body.clearance}).save(function(err){
    if(err){
      return res.send({code:121, message:"数据库错误"});
    }
    return res.send({code:200, message:"注册成功"});
  });
}
