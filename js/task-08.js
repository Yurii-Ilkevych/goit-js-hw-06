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

  console.log(`email: ${email.value}, password:  ${password.value}`);
  email.value = "";
  password.value = "";
}

// ********************** Version two ***********************
// function handleSubmitForm(event) {
//     event.preventDefault();
//     const {elements: {email, password}} = event.currentTarget;
//     const formData = new FormData(event.currentTarget);

//     formData.forEach((value) => {

//     if(value === ""){
//         return alert("Всі поля повинні бути заповнені")
//     }})
//     if(formEl.elements.email.value !== "" && formEl.elements.password.value !== "") {
//         console.log(`email: ${email.value}, password:  ${password.value}`)
//         email.value = "";
//     password.value = "";

//     }

// };
