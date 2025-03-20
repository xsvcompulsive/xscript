
class Storage {
    constructor() {
      this.store = JSON.parse(sessionStorage.getItem("store_list") || "[]");
    }

    get list() {
        return JSON.parse(sessionStorage.getItem("store_list") || "[]");
    }

    add(item) {
        this.store.push(item);
        sessionStorage.setItem("store_list", JSON.stringify(this.store));
    }

    clear() {
        sessionStorage.setItem("store_list", "");
    }
  }


  class StorageDict {
    constructor() {
      this.store = JSON.parse(sessionStorage.getItem("store_list") || "{}");
    }

    get all() {
        return JSON.parse(sessionStorage.getItem("store_list") || "{}");
    }

    add(item, value) {
        this.store[item] = value;
        sessionStorage.setItem("store_list", JSON.stringify(this.store));
    }

    clear() {
        sessionStorage.setItem("store_list", "{}");
    }

    remove(itemId) {
        delete this.store[itemId]
        sessionStorage.setItem("store_list", JSON.stringify(this.store));
    }
  }