const itemTypes = JSON.parse(sessionStorage.getItem("item_type") || "[]");
const template = document.querySelector(".checkout_item");

console.log(itemTypes);

itemTypes.forEach(item => {
    const clone = template.cloneNode(true);
    clone.hidden = false;
    clone.textContent = item;
    template.parentNode.appendChild(clone);
});
