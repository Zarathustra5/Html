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

//
function draw() {
  var canvas = document.getElementById("snow");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    var snowArr = [];
    function Snow(x,y){
      this.x = x;
      this.y = y;
      this.z = Math.floor(Math.random() * canvas.height);
      this.vy = 0.3;
      this.width = 2;
      this.height = 2;
      this.color = "white";
      this.draw = draw;
      this.del = del;
    }
    function draw(){
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x,this.y, this.width, this.height);
      setTimeout(del,3000);
    }
    function del(){
      ctx.clearRect(0,0, canvas.width, canvas.height);
    }
    while (snowArr.length < 30){
      var snow = new Snow(Math.floor(Math.random() * canvas.width),Math.floor(Math.random() * canvas.height));
      snowArr.push(snow);
    }
    for (let i = 0; i < snowArr.length; i++){
      function moveSnow(){
        snowArr[i].draw();
        snowArr[i].y += snowArr[i].vy;
        if (snowArr[i].y > canvas.height) snowArr[i].y = 0;
        requestAnimationFrame(moveSnow);
      }
      moveSnow();
      function deleteSnow(){
        snowArr[i].del();
        requestAnimationFrame(removeSnow);
      }
    }
    /*var snow = {
      x: 7,
      y: 5,
      z: Math.floor(Math.random() * canvas.height),
      vy: 1,
      width: 2,
      height: 2,
      color: "white",
      draw: function(){
        ctx.clearRect(0,0, canvas.width, canvas.height);
        ctx.fillStyle = this.color;
      }
    }*/
  }
}
