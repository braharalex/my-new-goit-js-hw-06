function getRandomHexColor() {
 return `#${Math.floor(Math.random() * 16777215)
  .toString(16)
  .padStart(6, 0)}`;
}

const btnEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");
console.log(btnEl);

btnEl.addEventListener("click", onClickChangeColor);

function onClickChangeColor() {
 const color = getRandomHexColor();
 document.body.style.backgroundColor = color;
 colorEl.textContent = color;
 console.log(document.body.style.backgroundColor === colorEl.textContent);
}
