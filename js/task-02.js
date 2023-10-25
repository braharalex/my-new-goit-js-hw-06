const ingredients = [
 "Potatoes",
 "Mushrooms",
 "Garlic",
 "Tomatos",
 "Herbs",
 "Condiments",
];

const ingredientsEl = document.getElementById("ingredients");

const itemsMarkup = ingredients.map((item) => {
 const itemEl = document.createElement("li");
 itemEl.textContent = item;
 itemEl.classList.add("item");
 console.log(itemEl);
 return itemEl;
});

ingredientsEl.append(...itemsMarkup);

console.log(itemsMarkup);
