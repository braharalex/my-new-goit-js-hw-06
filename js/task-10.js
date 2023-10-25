const numberInput = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesEl = document.getElementById("boxes");

createBtn.addEventListener("click", onCreateBtnAmountOfBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function onCreateBtnAmountOfBoxes() {
 const amount = Number(numberInput.value);

 if (!amount) {
  alert("Кількість має бути більше 0");
  return;
 }
 createBoxes(amount);
}

let size = 30;

function createBoxes(amount) {
 let boxes = "";

 for (let i = 1; i <= amount; i += 1) {
  boxes += `<div style="width:${size}px; height:${size}px; background-color:${getRandomHexColor()}"></div>`;
  size += 10;
 }

 boxesEl.insertAdjacentHTML("beforeend", boxes);
}

function getRandomHexColor() {
 return `#${Math.floor(Math.random() * 16777215)
  .toString(16)
  .padStart(6, 0)}`;
}

function destroyBoxes() {
 boxesEl.innerHTML = "";
}
