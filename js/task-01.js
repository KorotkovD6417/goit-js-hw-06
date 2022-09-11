const findListItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${findListItem.length}`);

findListItem.forEach(el => {
  console.log(`Category: ${el.firstElementChild.textContent}`),
    console.log(`Elements: ${el.children[1].children.length}`);
});