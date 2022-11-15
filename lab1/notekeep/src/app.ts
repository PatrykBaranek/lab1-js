import { Note } from './model/Note.js';
import { Color } from './types/types.js';

const notes: Note[] = [];

const storage: Storage = localStorage;

const createNewNote = (note: Note) => {
	notes.push(note);
	storage.setItem(String(notes.length), JSON.stringify(note));
	console.log(notes);
};

createNewNote(new Note('test', 'test', Color.RED, true, new Date()));

console.log(storage.getItem(String(1)));
