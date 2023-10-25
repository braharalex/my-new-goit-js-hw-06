const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
 event.preventDefault();
 const { email, password } = event.currentTarget.elements;

 if (!email.value || !password.value) {
  alert("всі поля повинні бути заповнені");
  return;
 } else {
  const data = {
   email: email.value,
   password: password.value,
  };
  console.log(data);
 }
 event.currentTarget.reset();
}
