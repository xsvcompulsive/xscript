const buttons = document.getElementsByClassName('item_btn');
//sessionStorage.setItem("item_type", "")
let item_storage = JSON.parse(sessionStorage.getItem("item_type") || "[]");
console.log(sessionStorage.getItem("item_type"));

for (let button of buttons) {
    button.addEventListener('click', function () {
        const itemAttr = button.getAttribute('item-attr');
        item_storage.push(itemAttr);
        sessionStorage.setItem("item_type", JSON.stringify(item_storage));

        //console.log(sessionStorage.getItem("item_type"));
    });
}

