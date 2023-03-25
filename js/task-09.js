const body = document.querySelector("body");

const BtnChangeColor = document.querySelector(".change-color");

const textInfAboutCurrentColor = document.querySelector(".color");

function getRandomHexColor() {
 return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  
}

BtnChangeColor.addEventListener("click",  editColor);
function editColor(){
  body.style.backgroundColor = getRandomHexColor();
  textInfAboutCurrentColor.textContent = getRandomHexColor();
}

