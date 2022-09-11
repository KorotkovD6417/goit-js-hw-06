const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients');

const foldIngredients = ingredients.map(el => {
  const ingredient = document.createElement('li');
  ingredient.textContent = el;
  ingredient.classList.add('item');

  return ingredient;
});

listRef.append(...foldIngredients);
console.log(listRef);