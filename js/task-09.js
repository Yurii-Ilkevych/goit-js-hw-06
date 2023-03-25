const body = document.querySelector("body");

const BtnChangeColor = document.querySelector(".change-color");

const textInfAboutCurrentColor = document.querySelector(".color");

function getRandomHexColor() {
  body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  textInfAboutCurrentColor.textContent = body.style.backgroundColor;
}

BtnChangeColor.addEventListener("click", getRandomHexColor);
