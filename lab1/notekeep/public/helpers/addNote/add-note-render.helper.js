import { render as renderNotes } from '../renderNotes/notes-render.helper.js';
import { postData } from './postData.js';
const divFormContainerElement = document.querySelector('.add-form-container');
const closeFormBtn = document.querySelector('#close-form-btn');
const addButtonElement = document.querySelector('.add-form__add-btn');
export const showAddForm = () => {
    if (!divFormContainerElement.classList.contains('hide')) {
        return;
    }
    divFormContainerElement.classList.remove('hide');
    closeFormBtn.addEventListener('click', closeAddForm);
    addButtonElement.addEventListener('click', (e) => {
        postData(e);
        renderNotes();
    });
};
export const closeAddForm = () => {
    divFormContainerElement.classList.add('hide');
};
