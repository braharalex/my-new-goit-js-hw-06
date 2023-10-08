const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInput);

function onInput(event) {
 const value = event.currentTarget.value.trim();
 //  if (value !== "") {
 //   nameEl.textContent = value;
 //  }

 nameEl.textContent = !value ? "Anonymous" : value;
}
