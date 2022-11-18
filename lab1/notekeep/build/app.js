import { render as renderNoteForm, } from './helpers/add-edit-note-render.helper.js';
const addNoteBtnElement = document.querySelector('#open-add-form');
const editNotBtnElement = document.querySelector('#open-edit-form');
addNoteBtnElement.addEventListener('click', renderNoteForm);
editNotBtnElement.addEventListener('click', renderNoteForm);
