import { indexOf } from "lodash";
import { blabla } from "src/components/burger-menu";
import { addHeaderAndFooter } from "src/components/header";
import { addBurgerMenu } from "src/components/burger-menu";
import "./style.scss";

addHeaderAndFooter();
addBurgerMenu();
const priceArray = [5000, 2000, 1000, 500, 250, 100, 50, 25];

const amountInput = document.querySelector(".another-amount__input");

const dotsAmount = `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none"
xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd"
    d="M31.4774 19.9999C31.4774 26.3438 26.3443 31.4769 20.0004 31.4769C13.6566 31.4769 8.52344 26.3438 8.52344 19.9999C8.52344 13.6561 13.6566 8.52295 20.0004 8.52295C26.3443 8.52295 31.4774 13.6561 31.4774 19.9999ZM20.0004 10.3147C25.3757 10.3147 29.7341 14.6246 29.7341 19.9999C29.7341 25.3752 25.3757 29.7336 20.0004 29.7336C14.6251 29.7336 10.3152 25.3752 10.3152 19.9999C10.3152 14.6246 14.6251 10.3147 20.0004 10.3147Z"
    fill="#FE9013" />
<path fill-rule="evenodd" clip-rule="evenodd"
    d="M20 0C31.0412 0 40 8.95884 40 20C40 31.0412 31.0412 40 20 40C8.95884 40 0 31.0412 0 20C0 8.95884 8.95884 0 20 0ZM20 1.79177C30.0726 1.79177 38.2567 9.92736 38.2567 20C38.2567 30.0726 30.0726 38.2567 20 38.2567C9.92736 38.2567 1.79177 30.0726 1.79177 20C1.79177 9.92736 9.92736 1.79177 20 1.79177Z"
    fill="#FE9013" />
</svg>`;
const circle = document.querySelectorAll(".range"); // собрали все слайды
const price = document.querySelectorAll(".paragraf");

function amountPrice(activeAmound = 0) {
  // console.log(price);
  let priceInInput;
  circle[activeAmound].innerHTML = dotsAmount;
  price[activeAmound].classList.add("paragraf_active");
  addAmountValue(price[activeAmound]);

  // проходимся циклом по всем слайдам и вешаем слушателя событий
  for (
    let i = 0;
    i < circle.length;
    i++ //   const dots of circle)
  ) {
    circle[i].addEventListener("click", () => {
      clearActiveClasses(circle, price);
      circle[i].innerHTML = dotsAmount;
      price[i].classList.add("paragraf_active");
      // priceInInput = price[i].innerText;
      addAmountValue(price[i]);
    });
  }
}

function clearActiveClasses(dots, price) {
  for (
    let i = 0;
    i < dots.length;
    i++ //   const dots of circle)
  ) {
    dots[i].innerHTML = "";
    price[i].classList.remove("paragraf_active");
  }
}

amountPrice(5);

// .paragraf_active

console.log(amountInput.value);

function addAmountValue(price, node) {
  let value = price.innerText;
  amountInput.value = value.slice(1);
}

// function checkInputValue(node, price) {
//   if (node.value === price) {
//   }
// }

amountInput.oninput = (event) => {
  if (event.target.value.length > 4) {
    event.target.value = event.target.value.slice(0, event.target.maxLength);
  }
  console.log(event.target.value);
  for (let i = 0; i < priceArray.length; i++) {
    if (event.target.value == priceArray[i]) {
      clearActiveClasses(circle, price);
      circle[i].innerHTML = dotsAmount;
      price[i].classList.add("paragraf_active");
      // priceInInput = price[i].innerText;
      addAmountValue(price[i]);
      break;
    } else {
      console.log(event.target.value, priceArray[i]);
      clearActiveClasses(circle, price);
    }
  }
};
