import { editNoteForm } from './helpers/editNote/editNoteForm.js';
import { showAddForm } from './helpers/addNote/add-note-render.helper.js';
import { render as renderNotes } from './helpers/renderNotes/notes-render.helper.js';
renderNotes();
const addNoteBtnElement = document.querySelector('#open-add-form');
const editNoteDivElements = [
    ...document.querySelectorAll('.note'),
];
addNoteBtnElement.addEventListener('click', showAddForm);
editNoteDivElements.forEach((noteDiv) => {
    noteDiv.addEventListener('click', editNoteForm);
});
