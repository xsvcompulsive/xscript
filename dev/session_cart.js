const buttons = document.getElementsByClassName('item_btn');

let item_storage = new StorageDict();
//item_storage.clear();

for (let button of buttons) {
    button.addEventListener('click', function () {
        const itemName = button.getAttribute('item-name');
        const itemPrice = button.getAttribute('item-price');
        item_storage.add(itemName, itemPrice);
    });
}

