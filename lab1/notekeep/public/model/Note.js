import { DataStorage } from './DataStorage.js';
export class Note {
    constructor(id, title, description, color, isPined) {
        this.id = '';
        this.title = title;
        this.description = description;
        this.color = color;
        this.isPined = isPined;
        this.createdAt = new Date().toLocaleString();
    }
    createNewNote() {
        this.id = DataStorage.addToLocalStorage(this);
        return this.id;
    }
    static getAllNotes() {
        const notes = DataStorage.getAllValues();
        return notes;
    }
    static deleteNoteById(createdAt) {
        DataStorage.RemoveItemById(createdAt);
    }
}
