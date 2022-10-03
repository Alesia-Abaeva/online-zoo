// Landing & Donate
// Меню в хедере, как только панель навигации превращается в бургер-меню.
// + Должно отерываться по нажатию
// + При открытии появляется меню, как на дизайне. Однако, на дизайне не хватает "крестика", т.е. кнопки закрытия, поэтому ее нужно добвать на свой вкус.
// + Область под открытым меню затемняется на всю доступную высоту экрана (накладывается полупрозрачный фон).
// + Нажатие на крестик или нажатие на затемненную область должны закрывать меню.
// + При закрытии, затемненная область под меню должна исчезнуть.

export const addBurgerMenu = () => {
  const burgerMenu = document.querySelector(".header__burger"); //кнопка
  const header = document.querySelector(".header"); //навигация
  const shadow = document.getElementById("shadow-overlay");

  burgerMenu.onclick = function onclickBurger() {
    //   console.log("asdasd");
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

// TODO - сделать логотип как на макете и проверить 320px!
