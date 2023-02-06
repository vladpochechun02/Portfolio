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

new WOW().init();
