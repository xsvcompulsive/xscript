const buttons = document.getElementsByClassName('item_btn');

let item_storage = new Storage();
//item_storage.clear();

for (let button of buttons) {
    button.addEventListener('click', function () {
        const itemAttr = button.getAttribute('item-attr');
        item_storage.add(itemAttr);
    });
}

