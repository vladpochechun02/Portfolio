//Отправка 
$('#message-form').submit(function(e) {
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
  }).done(function() {
      $(this).find("input").val("");
      $('#message-form').trigger('reset');
  });
  return false;
});


const humburger = document.querySelector('.humburger'),
      menu = document.querySelector(".menu"),
      closeElem = document.querySelector(".menu__close"),
      element = document.querySelector('.scroll-bar');

let links = document.getElementsByTagName('a');

humburger.addEventListener('click', () =>{
    menu.classList.add('active');
})

closeElem.addEventListener('click', () =>{
    menu.classList.remove('active');
})

for (let item of links) {
    item.addEventListener('click',() =>{
    menu.classList.remove('active');
    })
}

const percents = document.querySelectorAll('.skills__creating-percent'),
      lines = document.querySelectorAll('.skills__creating-line span');

percents.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

// Smooth scroll and page up что бы появлялся элемент при 1100 прокрученных пикселях
// $(window).scroll(function(){
//   if ($(this).scrollTop() > 1100) {
//     $('.scroll-bar').fadeIn();
//   } else {
//     $('.scroll-bar').fadeOut();
//   }
// });

$(window).scroll(function(){
    if ($(this).scrollTop() > 1100) {
    //   $('.scroll-bar').fadeIn();
    } else if ($(this).scrollTop() < 1100) {
        // $('.scroll-bar').fadeOut();
    }
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 1100) {
        $('.scroll-bar').fadeIn();
        element.addEventListener('click', () =>{
        element.classList.add('animate__animated', 'animate__fadeOutUpBig');
    })
    } else if (($(this).scrollTop() == 0)) {
        $('.scroll-bar').fadeOut();
        element.classList.remove('animate__animated', 'animate__fadeOutUpBig');
    }
  });
  
//   element.classList.add('animate__animated', 'animate__backOutUp');
//   element.addEventListener('click', () =>{
//     element.classList.add('animate__animated', 'animate__backOutUp');
// })

new WOW().init();
