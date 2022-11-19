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
        const notes = [];
        for (let i = 1; i < localStorage.length; i++) {
            notes.push(localStorage.getItem(String(i)));
        }
        return notes;
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
