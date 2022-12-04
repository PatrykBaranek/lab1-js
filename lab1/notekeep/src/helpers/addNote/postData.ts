import { Note } from '../../model/Note.js';
import { Color, DataFromForm, INote } from '../../types/types.js';
import { closeAddForm } from './add-note-render.helper.js';

const title = document.getElementById('title') as HTMLInputElement;
const description = document.getElementById('description') as HTMLInputElement;
const color = document.querySelector('select') as HTMLSelectElement;
const isPined = document.getElementById('isPined') as HTMLInputElement;

export const postData = (e: Event) => {
	e.preventDefault();

	const selectedColor = color.options[color.selectedIndex].text;

	const findColor = Object.values(Color).find(
		(x) => x === selectedColor
	) as Color;

	if (
		title.value.trim().length === 0 ||
		description.value.trim().length === 0
	) {
		alert('Title or description cannot be empty!');
		return;
	}

	const data: DataFromForm = {
		title: title.value,
		description: description.value,
		isPined: isPined.checked,
		color: findColor,
	};

	const newNote = new Note(
		data.title,
		data.description,
		data.color,
		data.isPined
	);

	newNote.createNewNote();
	resetInputs();
	closeAddForm();
};

const resetInputs = () => {
	title.value = '';
	description.value = '';
};
