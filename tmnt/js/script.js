//Бургер
let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".menu");
let logo = document.querySelector(".header__logo");
burger.onclick = function(){
  burger.classList.toggle("_active");
  logo.classList.toggle("_active");
  menu.classList.toggle("_active");
  document.body.classList.toggle("_locked");
}

//Путь ниндзя
let count = 0;
let ninjaWayImages = document.querySelectorAll(".ninja-way .card img");
for(let ninjaWayImage of ninjaWayImages){
  count++;
  if (count > 100){
    ninjaWayImage.setAttribute('src', 'img/ninja-way/' + count + '.jpg');
    ninjaWayImage.nextElementSibling.textContent = count + '.' + ninjaWayImage.nextElementSibling.textContent;
  }
}

//Воины тени
count = 260;
let shadowImages = document.querySelectorAll(".shadow-warriors .card img");
for(let shadowImage of shadowImages){
  count++;
  shadowImage.setAttribute('src', 'img/shadow-warriors/' + count + '.jpg');
  shadowImage.nextElementSibling.textContent = count + '.' + shadowImage.nextElementSibling.textContent;
}

//Братья по оружию
count = 520;
let weaphonImages = document.querySelectorAll(".weaphon-brothers .card img");
for(let weaphonImage of weaphonImages){
  count++;
  weaphonImage.setAttribute('src', 'img/weaphon-brothers/' + count + '.jpg');
  weaphonImage.nextElementSibling.textContent = count + '.' + weaphonImage.nextElementSibling.textContent;
}

//Серебристые
count = 670;
let silverImages = document.querySelectorAll(".silver .card img");
for(let silverImage of silverImages){
  count++;
  silverImage.setAttribute('src', 'img/silver/' + count + '.jpg');
  silverImage.nextElementSibling.textContent = count + '.' + silverImage.nextElementSibling.textContent;
}

//Увеличить размер при нажатии
let cards = document.querySelectorAll(".card"); 
for(let card of cards){
  card.onclick = function(){
    card.classList.toggle("_active");
    document.body.classList.toggle("_locked");
  }
}

//Поиск
let figcaptions = document.querySelectorAll(".card figcaption");
let search = document.querySelector(".search");
search.addEventListener('input', () => {
  for(let figcaption of figcaptions){
    if (figcaption.textContent.toLowerCase().indexOf(search.value.toLowerCase()) >= 0){
      figcaption.parentNode.classList.remove("_hidden");
    }else{
      figcaption.parentNode.classList.add("_hidden");
    }
  }
});

//Кнопка-скролл в шапке
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
        logo.classList.toggle("_active");
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

