"use strict"
//Радио-----------------------------------------
var rad_backcolor="#434242";
var rad_logo = "black";
var rad_autoplay = false;
var rad_width = "fixed";
var rad_width_px = 330;
var rad_stations =[['https://emgregion.hostingradio.ru:8064/moscow.europaplus.mp3','Европа плюс','europaplus'],['https://icecast228.ptspb.ru:8443/rr_128','Радио Рекорд','radiorecord'],['https://nashe1.hostingradio.ru/nashe-256','Наше радио','nashe'],['https://pub0302.101.ru:8443/stream/air/aac/64/100','Авторадио','avtoradio'],['http://ic7.101.ru:8000/a99?','Радио Energy','nrj'],['https://online.kissfm.ua/KissFM_HD','Kiss FM','kissfm']];

//Пауза----------------------------------------
let buttonPause = document.querySelector('button.button__pause');
let pause = document.querySelector('div.pause');
let aim = document.querySelector('img.aim');
buttonPause.onclick = function(){
  pause.style.visibility = 'visible';
  aim.style.animation= 'spinner 2s cubic-bezier(0,0,1,1) infinite alternate paused 0s backwards';
}
pause.onclick = function(){
  pause.style.visibility = 'hidden';
  aim.style.animation= 'spinner 2s cubic-bezier(0,0,1,1) infinite alternate running 0s backwards';
}

//Смена карты-------------------------------------
let buttonChangeMap = document.querySelector('button.button__map');
let buttonBack = document.querySelector('img.back');
let changemap = document.querySelector('div.changemap');
let menu = document.querySelector('div.menu');
buttonChangeMap.onclick = function(){
 menu.style.display = 'none';
 changemap.style.display = 'block';
}
buttonBack.onclick = function(){
 changemap.style.display = 'none';
 menu.style.display = 'grid';
}

//Выбор карты--------------------------------------------- 
let imgFolder = document.querySelector('div.changemap__maps');
let images = imgFolder.children;
let background = document.querySelector('img.bg');
for (let img of images){
  img = img.firstElementChild;
  img.onclick = function(){
    background.setAttribute('src', img.getAttribute('src'));
  }
}

//Смена оружия-------------------------------------
let buttonChangeGun = document.querySelector('button.button__gun');
let buttonBack2 = document.querySelector('img.back2');
let changegun = document.querySelector('div.changegun');
buttonChangeGun.onclick = function(){
 menu.style.display = 'none';
 changegun.style.display = 'block';
}
buttonBack2.onclick = function(){
 changegun.style.display = 'none';
 menu.style.display = 'grid';
}

//Выбор оружия--------------------------------------------- 
let gunFolder= document.querySelector('div.changegun__guns');
let guns = gunFolder.children;
let weaphon = document.querySelector('img.weaphon');
for (let gun of guns){
  gun = gun.firstElementChild;
  gun.onclick = function(){
    weaphon.setAttribute('src', gun.getAttribute('src'));
  }
}

//Проверка положения экрана-----------------------------------------------------------

let changeOr = document.querySelector('div.changeor');

function checkFirstOrientation(){
  if (outerHeight > outerWidth){
    changeOr.style.display='flex';
  }
}
checkFirstOrientation();

window.addEventListener("resize", function() {
  if (outerHeight > outerWidth){
    changeOr.style.display='flex';
  }else{
    changeOr.style.display='none';
  }
});
