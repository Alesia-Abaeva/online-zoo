import "./style.scss";
import { addHeaderAndFooter } from "src/components/header";
import animals from "../../src/constnts/animal";
import { addBurgerMenu } from "src/components/burger-menu";
import "./style.scss";

// constants
const leftArrow = document.querySelector(".left_arrow");
const rightArrow = document.querySelector(".rigth_arrow");
let arrayAnimalGenerate = [];
const animalSliderContainer = document.querySelector(
  ".section__container_scroll"
);
let animalConteinerGlobal;
let activeArraysAnimalIndex = 0;
let countAnimal = 6;
let setAnimalsSleder = addArraysAnimal(animals, 6); //создаем набор массивов для слайдера
const mobileBreakpoint = 790;

const windowInnerWidth = document.documentElement.clientWidth;
let pageWidth = document.documentElement.scrollWidth;

const getIsMobile = (breakpoint) =>
  matchMedia(`(max-width:${breakpoint}px)`).matches;

let isMobile = getIsMobile(mobileBreakpoint);

if (isMobile) {
  countAnimal = 4;
} else countAnimal = 6;

// call functions
addHeaderAndFooter();
addBurgerMenu();
addAnimal(countAnimal, setAnimalsSleder[activeArraysAnimalIndex]);

leftArrow.onclick = () => {
  changeSlideArray("left");
};

rightArrow.onclick = () => {
  changeSlideArray("rigth");
};

//  functions

function addAnimal(count = 6, arraysAnimals) {
  let array = arraysAnimals;
  arrayAnimalGenerate = array;

  for (let i = 0; i < count; i++) {
    const animalContainer = document.createElement("div");
    animalContainer.classList.add("container_animal");
    animalContainer.innerHTML = `<div class="wrapper_pic">
    <img class="animal_pic" src="${array[i].src}" alt="${array[i].title}">
</div>
<div class="animal_wrapper_description">
    <div class="animal__description">
        <h5 class="animal_name">${array[i].title}</h5>
        <p class="animal_geo">${array[i].description}</p>
    </div>
    <div class="animal_foods ${array[i].food}"></div>
</div>`;
    animalConteinerGlobal = animalContainer;
    animalSliderContainer.appendChild(animalContainer);
  }
}

// ГЕНЕРИМ РАНДОМНОЕ ЧИСЛО ИЗ МАССИВА
function rundomElementFromArray(array) {
  let result = Math.floor(Math.random() * array.length);
  return array[result];
}

// ЗАПОЛНЯЕМ МАССИВ УНИКАЛЬНЫМИ ДАННЫМИ (ПРОВЕРКА НА УНИКАЛЬНОСТЬ)
function getElementAnimals(arrayOrigin, count) {
  let unic;
  let arr = [];
  let result;
  while (arr.length < count) {
    do {
      unic = true;
      result = rundomElementFromArray(arrayOrigin);
      for (let i = 0; i < arr.length; i++) {
        if (result === arr[i]) {
          unic = false;
          break;
        }
      }
    } while (!unic);
    arr.push(result);
  }

  return arr;
}

// ГЕНЕРИРУЕМ НОВЫЙ МАССИВ, СРАВНИВАЯ ЕГО С УЖЕ СГЕНЕРИРОВАННЫМ МАССИВОМ
// function getNewElementAnimals(arrayOrigin, count, array) {
//   let unic;
//   let arr = array;
//   let arrayNew = [];
//   let result;
//   while (arrayNew.length < count) {
//     do {
//       unic = true;
//       result = rundomElementFromArray(arrayOrigin);
//       for (let i = 0; i < arr.length; i++) {
//         if (result === arr[i] || result === arrayNew[i]) {
//           unic = false;
//           break;
//         }
//       }
//     } while (!unic);
//     arrayNew.push(result);
//   }
//   console.log(arrayNew, "arrayNew");

//   return arrayNew;
// }

// window.addEventListener("click", (e) => {
//   const target = e.target;
//   console.log(target);
// });

// удалить содержимое в блоке container_animal
function removeAnimal(node) {
  let test = document.querySelectorAll(`${node}`);
  test.forEach(function (elem) {
    elem.parentNode.removeChild(elem);
  });
}

// ЗАПОЛНЯЕМ НОВЫМ СОДЕРЖИМЫМ
// function generateNewSet(arrayOrigin, count = 6) {
//   arrayAnimalGenerate = arrayOrigin;

//   for (let i = 0; i < count; i++) {
//     const animalContainer = document.createElement("div");
//     animalContainer.classList.add("container_animal");
//     animalContainer.innerHTML = `<div class="wrapper_pic">
//     <img class="animal_pic" src="${arrayOrigin[i].src}" alt="${arrayOrigin[i].title}">
// </div>
// <div class="animal_wrapper_description">
//     <div class="animal__description">
//         <h5 class="animal_name">${arrayOrigin[i].title}</h5>
//         <p class="animal_geo">${arrayOrigin[i].description}</p>
//     </div>
//     <div class="animal_foods ${arrayOrigin[i].food}"></div>
// </div>`;
//     animalConteinerGlobal = animalContainer;
//     animalSliderContainer.appendChild(animalContainer);
//   }
// }

const statefulCardsResize = () => {
  let isResizedSmaller = false;
  return (event) => {
    isMobile = getIsMobile(mobileBreakpoint);
    if (isMobile && !isResizedSmaller) {
      countAnimal = 4;
      removeAnimal(".container_animal");
      addAnimal(countAnimal, setAnimalsSleder[activeArraysAnimalIndex]);
      isResizedSmaller = true;
    }

    if (!isMobile && isResizedSmaller) {
      countAnimal = 6;
      removeAnimal(".container_animal");
      addAnimal(countAnimal, setAnimalsSleder[activeArraysAnimalIndex]);
      isResizedSmaller = false;
    }
  };
};

const cardsResizeHandler = statefulCardsResize();
addEventListener("resize", cardsResizeHandler);

// генерим набор изображений дл слайдера
function addArraysAnimal(array, count) {
  let arr = [];
  for (let i = 0; i < 6; i++) {
    arr.push(getElementAnimals(array, count));
  }
  return arr;
}

function changeSlideArray(direction) {
  if (direction === "rigth") {
    activeArraysAnimalIndex++;
    if (activeArraysAnimalIndex > 5) {
      activeArraysAnimalIndex = 0;
    }
    removeAnimal(".container_animal");
    addAnimal(countAnimal, setAnimalsSleder[activeArraysAnimalIndex]);
  } else if (direction === "left") {
    activeArraysAnimalIndex--;
    if (activeArraysAnimalIndex < 0) {
      activeArraysAnimalIndex = 5;
    }
    removeAnimal(".container_animal");
    addAnimal(countAnimal, setAnimalsSleder[activeArraysAnimalIndex]);
  }
}

/*--------------------------------------------------------------

--------------------------------------------------------------*/

let rangeTestimonialsElement = document.getElementById("feedback_range");
// const carousel = document.querySelector(".testimonials__container_carousel"),
const carousel = document.querySelector(".testimonials__container_feedback");
const testimonialsGap = 30;
const visibleTestimonials = 4;
const testimonialsCount = carousel.childElementCount - visibleTestimonials;
console.log(testimonialsCount);

// Считаем ширину отзыва с отступом
const testimonialElementWidth =
  carousel.firstElementChild.getBoundingClientRect().width + testimonialsGap;

// Порог срабатывания переключения, считая текущий максимум ренджа деленный на их количество и обрубая дробную часть
const rangeBoundary = Math.trunc(
  rangeTestimonialsElement.max / testimonialsCount
);
console.log(rangeBoundary);

// Переназначаем максимальный рендж для того чтобы в дальнейшем считать без дробной части
rangeTestimonialsElement.max = rangeBoundary * testimonialsCount;

rangeTestimonialsElement.oninput = function (event) {
  const currentRangeValue = event.target.value;

  // Проверяем достижение нашего порога срабатывания переключения на след отзыв проверкой деления на остаток
  // Если при делении текущего ренджа на значение границы переключения получается в остатке 0, значит нужно переключать на след отзыв
  const isReachedRangeBoundary = currentRangeValue % rangeBoundary === 0;

  // Считаем текущий отзыв, который находится в левом положении, в зависимости нахождения полосы прокрутки
  const currentTestimonialCount = currentRangeValue / rangeBoundary;

  if (isReachedRangeBoundary) {
    carousel.style.transform = `translateX(-${
      // считаем отступ на который нам нужно переключиться и переключаемся
      testimonialElementWidth * currentTestimonialCount
    }px)`;
  }
};
