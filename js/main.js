//Accordion
$('#accordion').on('click', '.title', function(){
  $('.title').removeClass('active');
  $(this).addClass('active');
});

//Modal window
$('.show-btn').click(function(){
  // Подучаем id модального окна которое нужно показать
  var modal_id = $(this).attr('data-target');
  $('body').append('<div class="modal-bg"></div>');
  $('#'+ modal_id).addClass('active');
});

$('.close-btn').click(function(){
  $('.modal-bg').remove();
  $(this).parents('.modal').removeClass('active');
});