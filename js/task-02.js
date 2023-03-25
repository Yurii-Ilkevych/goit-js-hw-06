const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const idIngredientsEl = document.querySelector("#ingredients");

// ********************** Version one ***********************
const addElement = (options) => {
  const allIngredients = [];
  for (const ingredient of options) {
    const addIngredientsTag = document.createElement("li");

    addIngredientsTag.classList.add("item");

    addIngredientsTag.textContent = ingredient;
    allIngredients.push(addIngredientsTag);
  }
  return allIngredients;
};
const createIngrediens = addElement(ingredients);
idIngredientsEl.append(...createIngrediens);

// ********************** Version two ***********************
// ingredientsEl.forEach( function (ingredient) {

//   const addIngredientsTeg = `<li class="item">${ingredient}</li>`

//  idIngredientsEl.innerHTML += addIngredientsTeg;

// });

// ********************** Version three ***********************
// const markupAndTag = ingredients.map((ingredient) => `<li class="item" >${ingredient}</li>`).join("");

// idIngredientsEl.insertAdjacentHTML("beforeend", markupAndTag);

// ********************** Version four ***********************
// ingredients.forEach( function (ingredient) {
//   const addIngredientsTag = document.createElement("li");

//   addIngredientsTag.classList.add("item");

//   addIngredientsTag.textContent = ingredient;

//  idIngredientsEl.append(addIngredientsTag)

// });
