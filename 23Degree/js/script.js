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
    
//Рисование прямоугольника на главной странице
function draw() {
  var canvas = document.getElementById('rectangle');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.strokeStyle="white";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(20,0);
    ctx.lineTo(0,0);
    ctx.lineTo(0,78);
    ctx.lineTo(350,78);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(605,78);
    ctx.lineTo(954,78);
    ctx.lineTo(954,0);
    ctx.lineTo(934,0);
    ctx.stroke();
  }
}
draw();
    
//Бургер
let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".menu");
let call = document.querySelector(".header__call");
burger.onclick = function(){
  burger.classList.toggle("_active");
  menu.classList.toggle("_active");
  document.body.classList.toggle("_locked");
}

//Скролл к элементу на странице
const scrolls = document.querySelectorAll(".scroll[data-goto]");
if (scrolls.length > 0){
  scrolls.forEach(scroll => {
    scroll.addEventListener("click", onScrollClick);
  });

  function onScrollClick(e){
    const scroll = e.target;
    if (scroll.dataset.goto && document.querySelector(scroll.dataset.goto)){
      const gotoBlock = document.querySelector(scroll.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
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

//Рассчет стоимости------------------------------------------
let packs = document.querySelectorAll(".form__packages .package"),
    areaNumber = document.querySelector(".display .area .number"),
    packetNumber = document.querySelector(".display .package .number"),
    priceNumber = document.querySelector(".display .price .number"),
    radios = document.querySelectorAll(".form__area input");
//Площадь помещения
radios.forEach(radio => {
  radio.onclick = function(){
    if(radio.checked){
      areaNumber.textContent = radio.previousElementSibling.textContent;
      let a = Number(areaNumber.textContent.replace("м2","").replace(" ","")),
          b = Number(packetNumber.textContent.replace(" ","")),
          res = a * b,
          [_, num, suffix] = res.toString().match(/^(.*?)((?:[,.]\d+)?|)$/);
      priceNumber.textContent = `${num.replace(/\B(?=(?:\d{3})*$)/g, ' ')}${suffix}`;
    }
  }
})
//Выберите пакет
packs.forEach(pack => {
  pack.onclick = function(){
    packs.forEach(pack => {
      pack.classList.remove("_active");
    })
    pack.classList.add("_active");
    packetNumber.textContent = pack.attributes[0].textContent;
    let a = Number(areaNumber.textContent.replace("м2","").replace(" ","")),
        b = Number(packetNumber.textContent.replace(" ","")),
        res = a * b,
        [_, num, suffix] = res.toString().match(/^(.*?)((?:[,.]\d+)?|)$/);
    priceNumber.textContent = `${num.replace(/\B(?=(?:\d{3})*$)/g, ' ')}${suffix}`;
}
});

//Портфолио
let portfolioSwitches = document.querySelectorAll(".portfolio__list .switch");
let portfolioSwipers = document.querySelectorAll(".portfolio__gallery .swiper1");

portfolioSwitches.forEach(portfolioSwitch => {
  portfolioSwitch.onclick = function(){
    portfolioSwitches.forEach(portfolioSwitch => {
      portfolioSwitch.classList.remove("_active");
    })
    portfolioSwipers.forEach(portfolioSwiper => {
      portfolioSwiper.classList.remove("_active");
      if (portfolioSwiper.attributes[0].textContent == portfolioSwitch.attributes[0].textContent){
        portfolioSwiper.classList.add("_active");
      }
    })
    portfolioSwitch.classList.add("_active");
  }
})
//Swiper js
//Портфолио
const sPortfolio = new Swiper('.swiper1',{
  slidesPerGroup: 1,
  slidesPerView: 1,
  allowTouchMove: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar', 
  },
  breakpoints: {
    828: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      allowTouchMove: true,
    },
    1053: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      allowTouchMove: false,
    },
  },
});

//Нам доверяют более 50 компаний
const sCompanies  = new Swiper('.swiper2',{
  slidesPerGroup: 1,
  slidesPerView: 1,
  spaceBetween: 20,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  breakpoints: {
    428: {
      slidesPerGroup: 2,
      slidesPerView: 2,
    },
    628: {
      slidesPerGroup: 3,
      slidesPerView: 3,
    },
    828: {
      slidesPerGroup: 4,
      slidesPerView: 4,
    },
    1053: {
      slidesPerGroup: 5,
      slidesPerView: 5,
    },
  },
});

//Наша команда
const sTeam = new Swiper('.swiper3',{
  slidesPerGroup: 1,
  slidesPerView: 1,
  allowTouchMove: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination2',
    type: 'progressbar', 
  },
  breakpoints: {
    828: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      allowTouchMove: true,
    },
    1053: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      allowTouchMove: false,
    },
  },
});
