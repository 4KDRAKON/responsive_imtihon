let elButton = document.querySelector(".btn");
let elButtonMenu = elButton.querySelector(".menu");
let elButtonExit = elButton.querySelector(".exit");
let header__list = document.querySelector(".header__list");

elButton.addEventListener("click", function(evt) {
    evt.preventDefault();

    elButtonMenu.classList.toggle("header__exit")
    elButtonExit.classList.toggle("header__menu")
    header__list.classList.toggle("list__block")
})