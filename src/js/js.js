const humburger = document.querySelector('.humburger'),
      menu = document.querySelector(".menu"),
      closeElem = document.querySelector(".menu__close");

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

new WOW().init();
