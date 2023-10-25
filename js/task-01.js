// const categoryEl = document.getElementById("categories");
const categoriesEl = document.querySelector("#categories");
const itemsEl = categoriesEl.querySelectorAll(".item");

console.log(`Number of categories: ${itemsEl.length}`);

itemsEl.forEach((item) => {
 console.log(`Category: ${item.firstElementChild.textContent}`);
 console.log(`Elements: ${item.lastElementChild.children.length}`);
});
