const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", handleSubmitForm);

// ********************** Version one ***********************
function handleSubmitForm(event) {
  const {
    elements: { email, password },
  } = event.currentTarget;
  event.preventDefault();
  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені");
  }


  console.log({ email: email.value, password: password.value  })
  email.value = "";
  password.value = "";
}
