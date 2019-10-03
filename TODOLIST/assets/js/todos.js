// '.on' will only be applied to element already existing, so new <li>'s will no be affected.
// Hence we use the parent element, <ul> with second argument <li>, to add listener.

// check off todos by clicking
$('ul').on('click', 'li', function () {
  $(this).toggleClass('done');
});


// add event listner to X
$('ul').on('click', 'span', function (e) {
  $(this).parent().fadeOut(800, function () {
    $(this).remove();
  });
  e.stopPropagation();
});

// create new to-do
$('input[type="text"').keypress(function (e) {
  if (e.which === 13) {
    let todoText = $(this).val();

    if (todoText.trim() !== "") {
      $('ul').append(`<li><span><i class="fa fa-trash"></i></span> ${todoText}</li>`);
      $(this).val('');
    }
  }
});

// add event listener to '+/-' for new items input
$('.fa-plus, .fa-minus').click(function () {
  $('input[type="text"]').slideToggle();
  $(this).toggleClass('fa-plus fa-minus');
});

// add event listener to help '?'
$('.fa-question').click(function () {
  $('small').toggleClass('hide-small');
  $('.fa-question').toggleClass('rotate');
});