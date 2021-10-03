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
    valueGive.firstElementChild.setAttribute('src', li.firstElementChild.getAttribute('src'));
    valueGive.lastElementChild.textContent = li.lastElementChild.textContent;
  }
}
for (let li of liGet){
  li.onclick = function(){
    valueGet.firstElementChild.setAttribute('src', li.firstElementChild.getAttribute('src'));
    valueGet.lastElementChild.textContent = li.lastElementChild.textContent;
  }
}
