let categories = document.querySelectorAll(".bar-filter__category");
categories.forEach(el => {
  el.onclick = () => {
    let activeCategory = document.querySelector(".bar-filter__category_active");
    activeCategory.classList.remove("bar-filter__category_active");
    el.classList.add("bar-filter__category_active");
    let indicators = document.querySelector(".bar-filter__indicators");
    let menu;
    if (el.id == "filter-cocktails") {
      indicators.classList.add("bar-filter__indicators_active");
      menu = document.querySelector("#menu-cocktails");
    } else {
      indicators.classList.remove("bar-filter__indicators_active");
      if (el.id == "filter-beer") {
        menu = document.querySelector("#menu-beer");
      } else if (el.id == "filter-soft") {
        menu = document.querySelector("#menu-soft");
      } else if (el.id == "filter-wine") {
        menu = document.querySelector("#menu-wine");
      }
    }
    let activeMenu = document.querySelector(".bar-menu_active");
    activeMenu.classList.remove("bar-menu_active");
    if (menu) menu.classList.add("bar-menu_active");
  }
});

// scroll
let productScrollBtns = document.querySelectorAll(".main__product");
productScrollBtns.forEach(el => {
  el.onclick = () => {
    let bar;
    if (el.id == "to-bar") {
      bar = document.querySelector("#bar");
    } else if (el.id == "to-tea") {
      bar = document.querySelector("#tea");
    } else if (el.id == "to-menu") {
      bar = document.querySelector("#menu");
    }
    window.scrollTo({
      top: bar.offsetTop,
      behavior: "smooth",
    });
  };
});

//scroll top
let scrollBtns = document.querySelectorAll(".scroll");
scrollBtns.forEach(el => {
  el.onclick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
});

//popup
let products = document.querySelectorAll(".product__info");
products.forEach(el => {
  el.onclick = () => {
    let popup = el.parentElement.querySelector(".product__popup");
    if (popup) {
      popup.classList.add("popup_active");
      document.body.classList.add("blocked");
      let closeBtn = popup.querySelector(".popup__close");
      closeBtn.onclick = () => {
        popup.classList.remove("popup_active");
        document.body.classList.remove("blocked");
      }
    }
  };
});
