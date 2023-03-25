const inputEl = document.querySelector("#font-size-control");

const textInputEl = document.querySelector("#text");

inputEl.addEventListener("input", changeTextEl);

inputEl.addEventListener("keydown", changeTextEl);

function changeTextEl() {
  textInputEl.style.fontSize = `${inputEl.value}px`;
}
