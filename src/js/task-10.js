const numberInput = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesEl = document.getElementById("boxes");

createBtn.addEventListener("click", onCreateBtnAmountOfBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function onCreateBtnAmountOfBoxes() {
 const amount = Number(numberInput.value);

 if (!amount) {
  console.log("Кількість має бути більше 0");
  return;
 }

 createBoxes(amount);
}

function createBoxes(amount) {
 const boxes = [];
 for (let i = 1; i <= amount; i += 1) {
  const boxEl = document.createElement("div");
  boxEl.style.width = "30px";
  boxEl.style.width += "10px";
  boxEl.style.height = "30px";
  boxEl.style.height += "10px";
  boxEl.style.backgroundColor = `${getRandomHexColor()}`;
  console.log(boxEl);
  boxes.push(boxEl);
 }
 boxesEl.append(...boxes);
}

function getRandomHexColor() {
 return `#${Math.floor(Math.random() * 16777215)
  .toString(16)
  .padStart(6, 0)}`;
}

function destroyBoxes() {
 boxesEl.innerHTML = "";
}
