let changeBtn = document.querySelectorAll(".change-button");
changeBtn.forEach(el => {
  el.onclick = () => {
    el.parentNode.parentNode.classList.add("is-changing");
  }
});
let notificationBtn = document.querySelectorAll(".notification-button");
notificationBtn.forEach(el => {
  el.onclick = () => {
    el.nextElementSibling.classList.toggle("active");
  }
});
//Бургер
/*
let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".menu");
burger.onclick = function(){
  burger.classList.toggle("_active");
  menu.classList.toggle("_active");
  document.body.classList.toggle("_locked");
}
*/
