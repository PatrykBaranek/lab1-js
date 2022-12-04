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
        DataStorage.addToLocalStorage(this);
    }
    static getAllNotes() {
        const notes = DataStorage.getAllValues();
        return notes;
    }
    static deleteNoteById(createdAt) {
        DataStorage.RemoveItemById(createdAt);
        location.reload();
    }
}
