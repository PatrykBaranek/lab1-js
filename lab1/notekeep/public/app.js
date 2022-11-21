import { render as renderNoteForm } from './helpers/add-note-render.helper.js';
import { editNoteForm } from './helpers/editNoteForm.js';
import { render as renderNotes } from './helpers/notes-render.helper.js';
renderNotes();
const addNoteBtnElement = document.querySelector('#open-add-form');
const editNoteDivElements = [
    ...document.querySelectorAll('.note'),
];
addNoteBtnElement.addEventListener('click', renderNoteForm);
editNoteDivElements.forEach((noteDiv) => {
    noteDiv.addEventListener('click', editNoteForm);
});
