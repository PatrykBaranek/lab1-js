import { render as renderNoteForm } from './helpers/add-note-render.helper.js';
import { render as renderNotes } from './helpers/notes-render.helper.js';

const addNoteBtnElement = document.querySelector(
	'#open-add-form'
) as HTMLButtonElement;

addNoteBtnElement.addEventListener('click', renderNoteForm);

renderNotes();
