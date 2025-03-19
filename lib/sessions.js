
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