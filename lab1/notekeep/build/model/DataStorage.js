export class DataStorage {
    constructor(value) {
        this.key = String(localStorage.length);
        this.value = JSON.stringify(value);
    }
    addToLocalStorage() {
        localStorage.setItem(this.key, this.value);
    }
    getValue() {
        return localStorage.getItem(this.key);
    }
    RemoveItem() {
        localStorage.removeItem(this.key);
    }
    static getAllValues() {
        for (let i = 1; i < localStorage.length; i++) {
            console.log(localStorage.getItem(String(i)));
        }
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
