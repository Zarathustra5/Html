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


//Строгий режим
"use strict"

//Кнопка переключения данных с отдаете в получаете--------------------------
let fieldGive = document.querySelector('.give__currency');
let fieldGet = document.querySelector('.get__currency');
let get = document.querySelector('.get');
let give = document.querySelector('.give');
let transport = document.querySelector('.transport');
transport.onclick = function(){
  if (transport.classList.contains('_active')){
    give.append(fieldGive);
    get.append(fieldGet);
  }else{
    get.append(fieldGive);
    give.append(fieldGet);
  }
  transport.classList.toggle('_active');
}

//Список кошельков----------------------------------------------
let chooseGive = document.querySelector('.give__choose');
let chooseGet = document.querySelector('.get__choose');
let listGive = document.querySelector('.give__list');
let listGet = document.querySelector('.get__list');
let animationGive = document.querySelector('.give__animation');
let animationGet = document.querySelector('.get__animation');
chooseGive.onclick = function(){
  if (chooseGive.classList.contains('_active')){
    listGive.style.display = "none";
    animationGive.style.transform = "none";
  }else{
    listGive.style.display = "block";
    animationGive.style.transform = "rotate(180deg)";
  }
  chooseGive.classList.toggle('_active');
}

chooseGet.onclick = function(){
  if (chooseGet.classList.contains('_active')){
    listGet.style.display = "none";
    animationGet.style.transform = "none";
    
  }else{
    listGet.style.display = "block";
    animationGet.style.transform = "rotate(180deg)";
  }
  chooseGet.classList.toggle('_active');
}

//Список кошельков----------------------------------------------
let liGive = document.querySelectorAll('.give__list li');
let liGet = document.querySelectorAll('.get__list li');
let valueGet = document.querySelector('.get__value');
let valueGive = document.querySelector('.give__value');
for (let li of liGive){
  li.onclick = function(){
    valueGive.firstElementChild.firstElementChild.setAttribute('srcset', li.firstElementChild.firstElementChild.getAttribute('srcset'));
    valueGive.firstElementChild.lastElementChild.setAttribute('src', li.firstElementChild.lastElementChild.getAttribute('src'));
    valueGive.lastElementChild.textContent = li.lastElementChild.textContent;
  }
}
for (let li of liGet){
  li.onclick = function(){
    valueGet.firstElementChild.firstElementChild.setAttribute('srcset', li.firstElementChild.firstElementChild.getAttribute('srcset'));
    valueGet.firstElementChild.lastElementChild.setAttribute('src', li.firstElementChild.lastElementChild.getAttribute('src'));
    valueGet.lastElementChild.textContent = li.lastElementChild.textContent;
  }
}

//Настройка Swiper
const swiper = new Swiper('.swiper3', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button_next',
    prevEl: '.swiper-button_prev',
  },
  slidesPerView:1,
  slidesPerGroup:1,
  spaceBetween:30,
  breakpoints:{
    826:{
      slidesPerView:2,
      slidesPerGroup:2,
    }
  }
});

//Бургер
let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".menu");
let main = document.querySelector("main");
burger.onclick = function(){
  burger.classList.toggle("_active");
  menu.classList.toggle("_active");
  main.classList.toggle("_active");
  document.body.classList.toggle("_locked");
}

//Меню список шапки
let showList = document.querySelector(".header .menu__show-list");
let menuList = document.querySelector(".header .menu__list");
showList.onclick = function(){
  showList.classList.toggle("_active");
  menuList.classList.toggle("_active");
}

//Меню список подвала
let footerShowList = document.querySelector(".footer__show-list");
let footerMenuList = document.querySelector(".footer__list");
footerShowList.onclick = function(){
  footerShowList.classList.toggle("_active");
  footerMenuList.classList.toggle("_active");
}
