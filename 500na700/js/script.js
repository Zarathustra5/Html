//Функция определения поддержки WebP
//JS-функция определения поддержки WebP

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2); 
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp'); 
  }else{
    document.querySelector('body').classList.add('no-webp'); 
  }
});
;

//Swiper главной секции
const sMain = new Swiper('.main-swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 20,
  centeredSlides: true,
  initialSlide: 1,
});

//Swiper новостей
const sNews = new Swiper('.news-swiper', {
  slidesPerGroup: 1,
  slidesPerView: 1,
  allowTouchMove: true,
  spaceBetween: 20,
  width: 200,
  breakpoints: {
    500: {
      slidesPerGroup: 1,
      slidesPerView: 2,
      allowTouchMove: true,
      width: null, 
    },
    1053: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      allowTouchMove: false,
      width: null, 
      grid: {
        fill: 'row',
        rows: 2,
      },
    },
  },
});

//Бургер
let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".menu");
burger.onclick = function(){
  burger.classList.toggle("_active");
  menu.classList.toggle("_active");
  document.body.classList.toggle("_locked");
  header.classList.toggle("_dark");
  isDesktop = false;
}

//Выпадающий список
let isDesktop = true;
let menuItemCaptions = document.querySelectorAll(".menu__item .caption"); 
let header = document.querySelector(".header");
menuItemCaptions.forEach(el => {
  el.onclick = () => {
    for (let i of menuItemCaptions){
      if (i != el){
        i.nextElementSibling.classList.remove("_active");
        i.classList.remove("_active");
      }
    }
    el.nextElementSibling.classList.toggle("_active");
    el.classList.toggle("_active");
    if (isDesktop){
      if (el.classList.contains("_active")){
        header.classList.add("_dark");
      }else{
        header.classList.remove("_dark");
      }
    }
  }
});

//FAQ выделение выбранного вопроса
let faqQuestions = document.querySelectorAll(".faq .question__caption");
faqQuestions.forEach(el => {
  el.onclick = () => {
    el.parentNode.classList.toggle("_active");
  }
});
