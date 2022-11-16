import { render as renderAddNote } from './helpers/add-edit-note-render.helper.js';
const addNoteBtnElement = document.querySelector('#add-btn');
const createNewNote = (note) => {
    console.log(localStorage.getItem(note.title));
};
addNoteBtnElement.addEventListener('click', renderAddNote);
