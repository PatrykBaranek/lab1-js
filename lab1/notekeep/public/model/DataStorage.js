export class DataStorage {
    constructor(note) {
        this.key = String(localStorage.length);
        this.value = JSON.stringify(note);
    }
    addToLocalStorage() {
        localStorage.setItem(this.key, this.value);
    }
    static getValue(index) {
        return localStorage.getItem(index.toString());
    }
    static RemoveItem(index) {
        localStorage.removeItem(index.toString());
    }
    static getAllValues() {
        const notes = [];
        for (let i = 1; i < localStorage.length; i++) {
            notes.push(localStorage.getItem(i.toString()));
        }
        return notes;
    }
    static RemoveAll() {
        localStorage.clear();
    }
    static RemoveItemWithKey(key) {
        if (localStorage.getItem(key.toString())) {
            localStorage.removeItem(key.toString());
        }
        return 'Not Found Item';
    }
}
