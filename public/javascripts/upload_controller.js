$('#upload-submit').click(function(){
  uploadQuery = {};
  $uploadInput = $('.upload-input');
  $.each($uploadInput, function(index, input){
    $input = $(input);
    input = new FormData(input);
    console.log(input)
  });
});

