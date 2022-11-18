import { Note } from './model/Note.js';
import { Color, DataFromForm } from './types/types.js';
import { DataStorage } from './model/DataStorage.js';
import {
	render as renderNoteForm,
	data,
} from './helpers/add-edit-note-render.helper.js';

const addNoteBtnElement = document.querySelector(
	'#open-add-form'
) as HTMLButtonElement;
const editNotBtnElement = document.querySelector(
	'#open-edit-form'
) as HTMLButtonElement;

addNoteBtnElement.addEventListener('click', renderNoteForm);
editNotBtnElement.addEventListener('click', renderNoteForm);
