export class DataStorage {
    static addToLocalStorage(note) {
        let key;
        let exist = false;
        while (exist) {
            key = Math.floor(Math.random() * 1000);
            if (localStorage.getItem(key.toString())) {
                exist = true;
                localStorage.setItem(key.toString(), JSON.stringify(note));
                return key;
            }
        }
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
    static RemoveItemById(createdAt) {
        if (localStorage.getItem(createdAt)) {
            localStorage.removeItem(createdAt);
        }
        return console.error('Not Found Item');
    }
}
