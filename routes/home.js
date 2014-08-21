exports.getHomePage = function(req, res){
  if(req.session.user == null){
    return res.redirect('/login');
  }
  return res.render('home', {title:'Home', user: req.session.sUser});
}
