exports.getHomePage = function(req, res){
  return res.render('home', {title: 'Home', user: req.session.sUser});
}
