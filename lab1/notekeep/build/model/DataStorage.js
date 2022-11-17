class DataStorage {
    constructor(value) {
        this.key = String(localStorage.length);
        this.value = JSON.stringify(value);
    }
    addToLocalStorage() {
        localStorage.setItem(this.key, this.value);
    }
    RemoveItem() {
        localStorage.removeItem(this.key);
    }
    static RemoveAll() {
        localStorage.clear();
    }
    static RemoveItemWithKey(key) {
        if (localStorage.getItem(String(key))) {
            localStorage.removeItem(String(key));
        }
        return 'Not Found Item';
    }
}
export {};
