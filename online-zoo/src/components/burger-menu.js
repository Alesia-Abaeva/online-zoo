let burgerMenu = document.querySelector(".header__burger"); //кнопка
let header = document.querySelector(".header"); //навигация
// let headerBackground = document.querySelector('.body__conteiner');
let shadow = document.getElementById("shadow-overlay");
// const links = Array.from(menuHeader.children);

burgerMenu.onclick = function onclickBurger() {
  //   console.log("asdasd");
  burgerMenu.classList.toggle("active-burger-menu");
  shadow.classList.toggle("shadow__overlay");
  header.classList.toggle("active_burger");
};

// menuBurger.addEventListener("click", function () {
//   menuBurger.classList.toggle("active");
//   menuHeader.classList.toggle("active");
//   shadow.classList.toggle("shadow__overlay");
// }); //open menu on click burgermenu

// window.addEventListener("click", (e) => {
//   const target = e.target;
//   if (
//     !target.closest(".header__menu") &&
//     !target.closest(".header-menu__burger")
//   ) {
//     menuHeader.classList.remove("active");
//     menuBurger.classList.remove("active");
//     shadow.classList.remove("shadow__overlay");
//   }
// }); // close menu outside

// links.forEach((link) => {
//   link.addEventListener("click", closeOnClick);
// });

// function closeOnClick() {
//   menuHeader.classList.remove("active");
//   menuBurger.classList.remove("active");
//   shadow.classList.remove("shadow__overlay");
// }
