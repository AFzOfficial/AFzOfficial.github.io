var typed = new Typed('#typing', {
    strings: ['Talk is cheap. Show me the code.'],
    typeSpeed: 50,
    startDelay: 500,
    showCursor: false,
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
});



$('#menu-button').click(() => {
  $('#menu').toggle(200);
});


$(document).click(function(event) {
  var target = $(event.target);
  if (!target.closest('#menu-button').length) {
    $('#menu').hide(200);
  }
});