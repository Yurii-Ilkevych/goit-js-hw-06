const value = document.querySelector("#value");
let counterValue = 0;
const decrementBtn = document.querySelector("button[data-action='decrement']");
const incrementBtn = document.querySelector("button[data-action='increment']");

decrementBtn.addEventListener("click", () => {
  value.textContent = counterValue -= 1;
  console.log(counterValue);
  // value.innerHTML = `<span id="value">${counterValue}</span>`
});
incrementBtn.addEventListener("click", () => {
  value.textContent = counterValue += 1;
  console.log(counterValue);
  // value.innerHTML = `<span id="value">${counterValue}</span>`
});
