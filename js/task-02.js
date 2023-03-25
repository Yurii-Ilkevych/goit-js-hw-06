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

