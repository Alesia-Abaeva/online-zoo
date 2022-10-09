export const addBurgerMenu = () => {
  const burgerMenu = document.querySelector(".header__burger"); //кнопка
  const header = document.querySelector(".header"); //навигация
  const shadow = document.getElementById("shadow-overlay");

  burgerMenu.onclick = function onclickBurger() {
    burgerMenu.classList.toggle("active-burger-menu");
    shadow.classList.toggle("shadow__overlay");
    header.classList.toggle("active_burger");
  };

  shadow.onclick = function closeBurger() {
    burgerMenu.classList.remove("active-burger-menu");
    shadow.classList.remove("shadow__overlay");
    header.classList.remove("active_burger");
  };
};
