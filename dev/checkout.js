const itemTypes = new StorageDict();

const template = document.querySelector(".checkout-item");
const removeBtnClone = document.querySelector(".remove-btn");
const removeBtns = document.getElementsByClassName('remove-btn');
let totalPrice = 0;

for (itemName in itemTypes.all) {
    const clone = template.cloneNode(true);
    const cloneRemoveBtn = removeBtnClone.cloneNode(true);
    clone.textContent = itemName;
    cloneRemoveBtn.itemName = itemName;
    cloneRemoveBtn.setAttribute("item-name", itemName);
    clone.hidden = false;
    cloneRemoveBtn.hidden = false;
    
    template.parentNode.appendChild(clone);
    template.parentNode.append(cloneRemoveBtn);
    
    totalPrice += parseInt(itemTypes.all[itemName]);
}

if (itemTypes.all != "") {
    const priceElement = document.querySelector(".price-total");
    priceElement.textContent = totalPrice;
    priceElement.hidden = false;
}

for (let button of removeBtns) {
    button.addEventListener('click', function () {
        itemTypes.remove(button.getAttribute('item-name'));
        //refresh div
    });
}