//Добавление класса webp 
@@include('_webp.js');

//Создание фона через html
function ibg(){
  let ibg=document.querySelectorAll(".ibg"); 
  for (var i = 0; i < ibg.length; i++) { 
    if(ibg[i].querySelector('img')){ 
      ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')'; 
    }
  }
}
ibg();

//Бургер
let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".menu");
burger.onclick = function(){
  burger.classList.toggle("_active");
  menu.classList.toggle("_active");
  document.body.classList.toggle("_locked");
}


//Ответы на вопросы
let li = document.querySelectorAll(".question");
let cross = document.querySelectorAll(".answer__cross");
for (let elem of li){
  elem.onclick = function(){
    elem.nextElementSibling.style.display = "block";
  }
}
for (let elem of cross){
  elem.onclick = function(){
    elem.parentNode.style.display = "none";
  }
}

//Кнопка-скролл в шапке
const scrolls = document.querySelectorAll(".scroll[data-goto]");
if (scrolls.length > 0){
  scrolls.forEach(scroll => {
    scroll.addEventListener("click", onScrollClick);
  });

  function onScrollClick(e){
    const scroll = e.target;
    if (scroll.dataset.goto && document.querySelector(scroll.dataset.goto)){
      const gotoBlock = document.querySelector(scroll.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector(".header").offsetHeight;
      if (menu.classList.contains('_active')){
        burger.classList.remove("_active");
        menu.classList.remove("_active");
        document.body.classList.remove("_locked");

      }
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}

//Настройка слайдера Slick 
$(document).ready(function(){
  $('.row').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    mobileFirst: true,
    arrows:false,
    responsive:[
      {
        breakpoint:1052,
        settings: {
          arrows:true,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint:1200,
        settings: "unslick"
      }
    ]
  });
})

//Добавление слайдера Slick 
@@include('_slick.min.js');
