let counterValue = 0;
const minusBtn = document.querySelector('[data-action="decrement"]');
const plusBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.getElementById("value");
valueEl.textContent = counterValue;

minusBtn.addEventListener("click", onClickMinus);
plusBtn.addEventListener("click", onClickPlus);

function onClickMinus() {
 counterValue -= 1;
 valueEl.textContent = counterValue;
}

function onClickPlus() {
 counterValue += 1;
 valueEl.textContent = counterValue;
}
