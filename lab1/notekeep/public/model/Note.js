import { DataStorage } from './DataStorage.js';
export class Note {
    constructor(title, description, color, isPined) {
        this.title = title;
        this.description = description;
        this.color = color;
        this.isPined = isPined;
        this.createdAt = new Date().toLocaleString();
    }
    createNewNote() {
        const dataStorage = new DataStorage(this);
        dataStorage.addToLocalStorage();
        return dataStorage.getValue();
    }
    static getAllNotes() {
        const notes = DataStorage.getAllValues();
        return notes;
    }
}
