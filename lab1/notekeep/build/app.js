import { Note } from './model/Note.js';
import { Color } from './types/types.js';
import { render as renderAddNote } from './helpers/add-edit-note-render.helper.js';
const addNoteBtnElement = document.querySelector('#add-btn');
const createNewNote = (note) => {
    const noteObj = new Note(note.title, note.description, note.color, note.isPined);
    console.log(localStorage.getItem(note.title));
};
createNewNote(new Note('test', 'description', Color.BLUE, false));
addNoteBtnElement.addEventListener('click', renderAddNote);
