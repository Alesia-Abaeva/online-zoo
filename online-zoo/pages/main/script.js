import "./style.scss";
import animals from "../../src/constnts/animal";

window.addEventListener("resize", function () {
  let pageWidth = document.documentElement.scrollWidth;
  console.log(pageWidth);
});

function addAnimal(count = 6) {
  let array = getElementAnimals(animals, count);
  const animalSliderContainer = document.querySelector(
    ".section__container_scroll"
  );

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

    animalSliderContainer.appendChild(animalContainer);
  }
}
addAnimal();

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
function getElementAnimals(array, count, color) {
  let unic;
  let arr = [];
  let result;
  while (arr.length < count) {
    do {
      unic = true;
      result = rundomElementFromArray(array);
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
  return arr;
}
