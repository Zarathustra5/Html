let changeBtn = document.querySelectorAll(".change-button");
changeBtn.forEach(el => {
  el.onclick = () => {
    el.parentNode.parentNode.classList.add("is-changing");
  }
});
