export class DataStorage {
    // !!! Performance issue
    static addToLocalStorage(note) {
        let key = localStorage.length;
        if (!localStorage.key(key)) {
            localStorage.setItem(String(key), JSON.stringify(note));
        }
        return key;
    }
    static getAllValues() {
        const notes = [];
        for (let i = 1; i < localStorage.length; i++) {
            notes.push(localStorage.getItem(localStorage.key(i)));
        }
        return notes;
    }
    static RemoveAll() {
        localStorage.clear();
    }
    static RemoveItemById(createdAt) {
        if (localStorage.getItem(createdAt)) {
            localStorage.removeItem(createdAt);
        }
        return console.error('Not Found Item');
    }
}
