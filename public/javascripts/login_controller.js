$(document).ready(function(){
  console.log('ready')
  $('#login-submit').click(function(){
    var dataHash = {email: $('#login-email').val(), password: $('#login-password').val()};
    $.ajax({
      url: '/api/login',
      type: 'post',
      data: JSON.stringify(dataHash),
      dataType: 'json',
      contentType: 'application/json'
    }).done(function(res){
      if(res.code < 200){
        $('#'+res.code).slideDown()
        setTimeout(function(){
          $('#'+res.code).slideUp()
        }, 3000);
      }else{
        $('.login-container').fadeOut(400, function(){
          $('.login-container').remove();
          window.location = '/home';
        })
      }
    });
  })
});
