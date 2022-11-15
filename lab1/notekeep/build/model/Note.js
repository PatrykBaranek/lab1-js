const notes = [];
export class Note {
    constructor(title, description, color, isPined) {
        this.title = title;
        this.description = description;
        this.color = color;
        this.isPined = isPined;
        this.createdAt = new Date();
    }
    static createNewNote(note) {
        notes.push(note);
        localStorage.setItem(note.title, JSON.stringify(note));
        return localStorage.getItem(note.title);
    }
    static getAllNotes() {
        return notes;
    }
}
