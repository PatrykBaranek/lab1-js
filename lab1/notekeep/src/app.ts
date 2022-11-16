import { Note } from './model/Note.js';
import { Color } from './types/types.js';
import { render as renderAddNote } from './helpers/add-edit-note-render.helper.js';

const addNoteBtnElement = document.querySelector(
	'#add-btn'
) as HTMLButtonElement;

const createNewNote = (note: Note) => {
	console.log(localStorage.getItem(note.title));
};

addNoteBtnElement.addEventListener('click', renderAddNote);
