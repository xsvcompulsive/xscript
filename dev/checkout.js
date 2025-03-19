const itemTypes = new Storage();

const template = document.querySelector(".checkout_item");

itemTypes.list.forEach(item => {
    const clone = template.cloneNode(true);
    clone.hidden = false;
    clone.textContent = item;
    template.parentNode.appendChild(clone);
});
