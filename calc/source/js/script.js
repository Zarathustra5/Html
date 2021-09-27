//Строгий режим
"use strict"

//-------------------------------------------
let display = document.querySelector(".calc__display input");
let numbers = document.querySelectorAll(".calc__numbers button");
let operations = document.querySelectorAll(".calc__operations button:not([class])");
let deleteAll = document.querySelector(".calc__delete-all");
let deleteLast = document.querySelector(".calc__delete-last");
let result = document.querySelector(".calc__result");

//Кнопки цифр-------------------------------------------
for (let i of numbers){
  i.onclick = function(){
    display.value += i.textContent;
  }
}

//Кнопки операторов-------------------------------------------
for (let j of operations){
  j.onclick = function(){
    display.value += j.textContent;
  }
}

//Кнопка удаления всего-------------------------------------------
deleteAll.onclick = function(){
  display.value = '';
}

//Кнопка удаления последнего символа----------------------------------------
deleteLast.onclick = function(){
  display.value = display.value.slice(0,-1); 
}

//Кнопка равно-------------------------------------------
result.onclick = function(){
  display.value = eval(display.value);
}

//Enter выводит результат-------------------------------------------
window.onkeydown = function(e) {
  if (e.keyCode === 13) { 
    display.value = eval(display.value);
  }
}
