//Строгий режим
"use strict"

//Кнопка переключения данных с отдаете в получаете--------------------------
let giveField = document.querySelector('.give__currency');
let getField = document.querySelector('.get__currency');
let get = document.querySelector('.get');
let give = document.querySelector('.give');
let transport = document.querySelector('.transport');
transport.onclick = function(){
  if (transport.classList.contains('_active')){
    give.append(giveField);
    get.append(getField);
    transport.classList.remove('_active');
  }else{
    get.append(giveField);
    give.append(getField);
    transport.classList.add('_active');
  }
}

//Список кошельков----------------------------------------------
let getChoose = document.querySelector('.get__choose');
let giveChoose = document.querySelector('.give__choose');
let getList = document.querySelector('.get__list');
let giveList = document.querySelector('.give__list');
getChoose.onclick = function(){
  if (getChoose.classList.contains('_active')){
    getList.style.display = "none";
    getChoose.classList.remove('_active');
  }else{
    getList.style.display = "block";
    getChoose.classList.add('_active');
    getChoose.style.transform('none');
  }
}
giveChoose.onclick = function(){
  if (giveChoose.classList.contains('_active')){
    giveList.style.display = "none";
    giveChoose.classList.remove('_active');
  }else{
    giveList.style.display = "block";
    giveChoose.classList.add('_active');
  }
}
