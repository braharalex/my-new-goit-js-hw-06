function getRandomHexColor() {
 return `#${Math.floor(Math.random() * 16777215)
  .toString(16)
  .padStart(6, 0)}`;
}

const numberInput = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesEl = document.getElementById("boxes");
let number = 0;

createBtn.addEventListener("click", onCreateBox);
destroyBtn.addEventListener("click", destroyBoxes);

function onCreateBox(event) {
 number = event.currentTarget.value;
 createBoxes(number);
}
// function onDestroyElements(event) {
//   number = event.currentTarget.value;
// }

function createBoxes(amount) {}

function destroyBoxes(event) {
 event.currentTarget.reset();
 e;
}
