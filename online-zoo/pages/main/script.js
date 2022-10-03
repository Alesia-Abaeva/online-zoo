import "./style.scss";
import { addHeaderAndFooter } from "src/components/header";
import animals from "../../src/constnts/animal";
import { addBurgerMenu } from "src/components/burger-menu";
import "./style.scss";
addHeaderAndFooter();
addBurgerMenu();

const windowInnerWidth = document.documentElement.clientWidth;
const leftArrow = document.querySelector(".left_arrow");
const rightArrow = document.querySelector(".rigth_arrow");

// let count = 6;

// window.addEventListener("resize", function () {
//   let pageWidth = document.documentElement.scrollWidth;
//   //   if (pageWidth <= 780) {
//   //   }
//   console.log(pageWidth);
// });
let arrayAnimalGenerate = [];
const animalSliderContainer = document.querySelector(
  ".section__container_scroll"
);
let animalConteinerGlobal;

function addAnimal(count = 6) {
  let array = getElementAnimals(animals, count);
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
addAnimal();
console.log(arrayAnimalGenerate, "arrayAnimalGenerate");
console.log(animalConteinerGlobal, "animalConteinerGlobal");

// 1 - выбрать 6 элементов из массива - рандомно!
// 2 - записать результат в переменную
// 3 -  вывести резудьтат в блоке
// 4 - замешать новый набор, сразнивая его с предыдущим

// generate a random number
function rundomElementFromArray(array) {
  let result = Math.floor(Math.random() * array.length);
  return array[result];
}

// filling the array with unique data
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
          // check whether there was such an element in the array
          unic = false;
          break;
        }
      }
    } while (!unic); //starting again
    arr.push(result);
  }
  console.log(arr, "arr");

  return arr;
}

function getElementAnimals2(arrayOrigin, count, array) {
  let unic;
  let arr = array;
  let arrayNew = [];
  let result;
  while (arrayNew.length < count) {
    do {
      unic = true;
      result = rundomElementFromArray(arrayOrigin);
      for (let i = 0; i < arr.length; i++) {
        if (result === arr[i] || result === arrayNew[i]) {
          // check whether there was such an element in the array
          unic = false;
          break;
        }
      }
    } while (!unic); //starting again
    arrayNew.push(result);
  }
  console.log(arrayNew, "arrayNew");

  return arrayNew;
}

window.addEventListener("click", (e) => {
  const target = e.target;
  console.log(target);
});

// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================

// Slider

// кнопки arrow

// function generateNextAnimalPack(arraySlider, arrayAnimal) {
//   let countArray = arraySlider;
// }

leftArrow.onclick = function generateNextAnimalPack(arraySlider, arrayAnimal) {
  let arr = getElementAnimals2(animals, 6, arrayAnimalGenerate);
  console.log(arr, "getElementAnimals2");
  removeAnimal(".container_animal");
  addAnimal2(arr, 6);
}; // - сгенерили новый массив - уникальный

rightArrow.onclick = function generateNextAnimalPack(arraySlider, arrayAnimal) {
  let arr = getElementAnimals2(animals, 6, arrayAnimalGenerate);
  console.log(arr, "getElementAnimals2");
  removeAnimal(".container_animal");
  addAnimal2(arr, 6);
}; // - сгенерили новый массив - уникальный

// поставить заново

// удалить содержимое
function removeAnimal(node) {
  let test = document.querySelectorAll(`${node}`);
  test.forEach(function (elem) {
    elem.parentNode.removeChild(elem);
  });
}

function changeOnClick() {}

function addAnimal2(arrayOrigin, count = 6) {
  // let array = getElementAnimals(arrayOrigin, count);
  arrayAnimalGenerate = arrayOrigin;

  for (let i = 0; i < count; i++) {
    const animalContainer = document.createElement("div");
    animalContainer.classList.add("container_animal");
    animalContainer.innerHTML = `<div class="wrapper_pic">
    <img class="animal_pic" src="${arrayOrigin[i].src}" alt="${arrayOrigin[i].title}">
</div>
<div class="animal_wrapper_description">
    <div class="animal__description">
        <h5 class="animal_name">${arrayOrigin[i].title}</h5>
        <p class="animal_geo">${arrayOrigin[i].description}</p>
    </div>
    <div class="animal_foods ${arrayOrigin[i].food}"></div>
</div>`;
    animalConteinerGlobal = animalContainer;
    animalSliderContainer.appendChild(animalContainer);
  }
}
