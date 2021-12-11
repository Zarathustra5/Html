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

//Боковая панель с новостями на маленьких экранах
let sidebarBurger = document.querySelector(".sidebar-burger"),
    sidebarUndo = document.querySelector(".sidebar .undo"),
    sidebarShowForm = document.querySelector(".sidebar .show-form"),
    sidebarShowNews = document.querySelector(".sidebar .show-news"),
    sidebar = document.querySelector(".sidebar"),
    sidebarForm = document.querySelector(".sidebar__form"),
    sidebarNews = document.querySelector(".sidebar__news");
sidebarBurger.onclick = function(){
  sidebarBurger.classList.add("_active");
  sidebar.classList.add("_active");
  document.body.classList.add("_locked");
  burger.classList.remove("_active");
  menu.classList.remove("_active");
}
sidebarUndo.onclick = function(){
  sidebarBurger.classList.remove("_active");
  sidebar.classList.remove("_active");
  document.body.classList.remove("_locked");
  sidebarForm.classList.remove("_active");
  sidebarNews.classList.remove("_active");
}
sidebarShowForm.onclick = function(){
  sidebarForm.classList.toggle("_active");
  sidebarNews.classList.remove("_active");
}
sidebarShowNews.onclick = function(){
  sidebarForm.classList.remove("_active");
  sidebarNews.classList.toggle("_active");
}

//Бургер
let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".menu");
burger.onclick = function(){
  burger.classList.toggle("_active");
  menu.classList.toggle("_active");
  sidebarBurger.classList.remove("_active");
  sidebar.classList.remove("_active");
  document.body.classList.remove("_locked");
  sidebarForm.classList.remove("_active");
  sidebarNews.classList.remove("_active");
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

//Swiper js
const sCups = new Swiper('.swiper1',{
  slidesPerGroup: 1,
  slidesPerView: 3,
  loop: true,
  simulateTouch: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    431: {
      slidesPerGroup: 3,
      slidesPerView: 5,
    },
    1053: {
      slidesPerGroup: 3,
      slidesPerView: 8,
    },
    1201: {
      slidesPerGroup: 3,
      slidesPerView: 10,
    },
  },
});

//Календарь----------------------------------------------------
function Calendar2(id, year, month) {
  var Dlast = new Date(year,month+1,0).getDate(),
      D = new Date(year,month,Dlast),
      DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),
      DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
      calendar = '<tr>',
      month=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
  if (DNfirst != 0) {
    for(var  i = 1; i < DNfirst; i++) calendar += '<td>';
  }else{
    for(var  i = 0; i < 6; i++) calendar += '<td>';
  }
  for(var  i = 1; i <= Dlast; i++) {
    if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
      calendar += '<td class="today">' + i;
    }else{
      calendar += '<td>' + i;
    }
    if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
      calendar += '<tr>';
    }
  }
  for(var  i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
  document.querySelector('#'+id+' tbody').innerHTML = calendar;
  document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
  document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = D.getMonth();
  document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = D.getFullYear();
  if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
      document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
  }
  //Выбор даты
  let calendarDates = document.querySelectorAll(".calendar__window tbody td");
  calendarDates.forEach(calendarDate => {
    calendarDate.onclick = function(){
      calendarDate.classList.toggle("today");
    }
  })
}
Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
// переключатель минус месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
  Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)-1);
}
// переключатель плюс месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
  Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)+1);
}
//---------------------------------------------------------

//Скрыть/показать календарь
let calendarBtn = document.querySelector(".calendar button"),
    calendarWindow = document.querySelector(".calendar__window"),
    panel = document.querySelector("section.panel"),
    blackScreen = document.querySelector(".fill .ibg");
calendarBtn.onclick = function(){
  calendarWindow.classList.toggle("_active");
  panel.classList.toggle("_active");
  blackScreen.classList.toggle("_active");
}

//Кнопка показать еще ставки
let showMoreBtns = document.querySelectorAll("button.show-more");
showMoreBtns.forEach(showMoreBtn => {
  showMoreBtn.onclick = function(){
    showMoreBtn.classList.add("_off");
    if (showMoreBtn.parentNode.nextElementSibling != null){
      showMoreBtn.parentNode.nextElementSibling.classList.add("_active");
    }
  }
})
