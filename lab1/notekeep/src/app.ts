import { render as renderNoteForm } from './helpers/add-edit-note-render.helper.js';
import { render as renderNotes } from './helpers/notes-render.helper.js';

const addNoteBtnElement = document.querySelector(
	'#open-add-form'
) as HTMLButtonElement;
const editNotBtnElement = document.querySelector(
	'#open-edit-form'
) as HTMLButtonElement;

addNoteBtnElement.addEventListener('click', renderNoteForm);
editNotBtnElement.addEventListener('click', renderNoteForm);

renderNotes();
