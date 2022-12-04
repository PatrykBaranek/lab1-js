import { render as renderNotes } from '../renderNotes/notes-render.helper.js';
import { postData } from './postData.js';

const divFormContainerElement = document.querySelector(
	'.add-form-container'
) as HTMLDivElement;
const closeFormBtn = document.querySelector(
	'#close-form-btn'
) as HTMLButtonElement;
const addButtonElement = document.querySelector(
	'.add-form__add-btn'
) as HTMLButtonElement;

export const showAddForm: () => void = () => {
	if (!divFormContainerElement.classList.contains('hide')) {
		return;
	}

	divFormContainerElement.classList.remove('hide');

	closeFormBtn.addEventListener('click', closeAddForm);
	addButtonElement.addEventListener('click', (e: Event) => {
		postData(e);
		renderNotes();
	});
};

export const closeAddForm: () => void = () => {
	divFormContainerElement.classList.add('hide');
};
