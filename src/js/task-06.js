const inputEl = document.getElementById("validation-input");
console.log(inputEl);

inputEl.addEventListener("blur", onBlurValidate);

function onBlurValidate(event) {
 const input = event.currentTarget;

 if (Number(input.dataset.length) === input.value.trim().length) {
  input.classList.add("valid");
  input.classList.remove("invalid");
 } else {
  input.classList.add("invalid");
  input.classList.remove("valid");
 }
}
