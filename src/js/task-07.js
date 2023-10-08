const inputEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");
console.log(inputEl);

inputEl.addEventListener("input", onInputFontSize);

function onInputFontSize(event) {
 textEl.style.fontSize = `${event.currentTarget.value}px`;
}
