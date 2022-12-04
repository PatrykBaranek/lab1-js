import { Note } from '../../model/Note.js';
import { Color, DataFromForm } from '../../types/types.js';
import { closeAddForm } from './add-note-render.helper.js';

export const postData = (e: Event) => {
	e.preventDefault();

	const title = document.getElementById('title') as HTMLInputElement;
	const description = document.getElementById(
		'description'
	) as HTMLInputElement;
	const color = document.querySelector('select') as HTMLSelectElement;
	const isPined = document.getElementById('isPined') as HTMLInputElement;

	const selectedColor = color.options[color.selectedIndex].text;

	const findColor = Object.values(Color).find(
		(x) => x === selectedColor
	) as Color;

	const data: DataFromForm = {
		title: title.value,
		description: description.value,
		isPined: isPined.checked,
		color: findColor,
	};

	const newNote = new Note(
		'',
		data.title,
		data.description,
		data.color,
		data.isPined
	);

	console.log(newNote);

	newNote.createNewNote();

	closeAddForm();
};
