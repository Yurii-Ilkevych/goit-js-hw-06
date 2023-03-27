function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


//*******************************  неможу додуматись як збільшити кожен наступний юлок на 10px **************************




const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");
const controls = document.querySelector("#controls");

 createBtn.addEventListener("click", getValue)
function getValue(event) {
 const currentInputvalue = event.currentTarget.previousElementSibling.value;

   if(Number(controls.firstElementChild.max) >= Number(event.currentTarget.previousElementSibling.value)){
    
    if(currentInputvalue !== "") {
      createBoxes(Number(currentInputvalue));
      event.currentTarget.previousElementSibling.value = "";
    }
   }
  }

 
  function createBoxes(amount) {

    for( let i = 0; i < amount ; i += 1){
      
     
        const marcup = document.createElement("div");
       
        marcup.style.width = 20 + 10 * i + "px";
        marcup.style.height = 20 + 10 * i + "px";
       
        marcup.style.backgroundColor = getRandomHexColor();
        
       
     
        boxesContainer.append(marcup)  
    
      console.log(boxesContainer)
    }}
 
 







 









destroyBtn.addEventListener("click", removeColection);
function removeColection() {
  boxesContainer.innerHTML = "";
};