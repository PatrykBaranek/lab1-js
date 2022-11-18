import { DataStorage } from './DataStorage.js';
const notes = [];
export class Note {
    constructor(title, description, color, isPined) {
        this.title = title;
        this.description = description;
        this.color = color;
        this.isPined = isPined;
        this.createdAt = new Date();
    }
    createNewNote() {
        notes.push(this);
        const dataStorage = new DataStorage(this);
        dataStorage.addToLocalStorage();
        return dataStorage.getValue();
    }
    static getAllNotes() {
        return notes;
    }
}
