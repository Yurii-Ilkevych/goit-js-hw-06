const nameInputEl = document.querySelector("#name-input");
const textOutputEl = document.querySelector("#name-output");

nameInputEl.addEventListener("input", (event) => {
  textOutputEl.textContent = event.currentTarget.value || "Anonymous";
});
