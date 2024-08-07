@@include('_webp.js');

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

//Бургер
let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".product-menu");
burger.onclick = function(){
  burger.classList.toggle("_active");
  menu.classList.toggle("_active");
  document.body.classList.toggle("_locked");
}

//Меню сайта
let siteMenuShow = document.querySelector(".header .site-menu__show");
let siteMenuList = document.querySelector(".header .site-menu__list");
siteMenuShow.onclick = function(){
  siteMenuShow.classList.toggle("_active");
  siteMenuList.classList.toggle("_active");
}

//Вход в аккаунт
let loginBtn = document.querySelector(".header .main-menu__login-btn");
let loginBtnUser = document.querySelector(".header .login-btn__user");
let loginForm = document.querySelector(".header .main-menu__login-form");
let loginAccount = document.querySelector(".header .main-menu__login-account");
let isAuthorized = false;
loginBtn.onclick = function(){
  loginBtn.classList.toggle("_active");
  if (isAuthorized){
    loginAccount.classList.toggle("_active");
  }else{
    loginForm.classList.toggle("_active");
  }
}

//Данные формы
function getFormValue(event) {
  event.preventDefault();     
  let formData = new FormData(loginForm);
  if (formData.get("login") != "" && formData.get("password") != ""){
    isAuthorized = true;
    loginBtn.classList.remove("_active");
    loginBtn.classList.add("_padding");
    loginForm.classList.remove("_active");
    loginBtnUser.querySelector(".email").textContent = formData.get("login");
    loginBtnUser.querySelector(".name").textContent = "Новый пользователь";
  }
}
loginForm.addEventListener("submit", getFormValue);

//Выход из акаунта
let exitAccount = document.getElementById("exit");
exitAccount.onclick = () => {
  isAuthorized = false;
  loginBtn.classList.remove("_active");
  loginBtn.classList.remove("_padding");
  loginAccount.classList.remove("_active");
  loginBtnUser.querySelector(".email").textContent = "";
  loginBtnUser.querySelector(".name").textContent = "";
}

//В закладки
let bookmark = document.querySelector(".header .site-menu__bookmark");
bookmark.onclick = function(){
  bookmark.classList.toggle("_active");
}
