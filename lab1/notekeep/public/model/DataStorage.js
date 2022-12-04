export class DataStorage {
    static addToLocalStorage(note) {
        let key = note.createdAt;
        localStorage.setItem(key, JSON.stringify(note));
        return key;
    }
    static getAllValues() {
        const notes = [];
        for (let i = 0; i < localStorage.length; i++) {
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
