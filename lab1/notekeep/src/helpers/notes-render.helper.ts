import { Note } from '../model/Note.js';
import { INote } from '../types/types.js';

let notesContainerElement = document.querySelector('.notes') as HTMLDivElement;
const dateArr: string[] = [];

export const render = () => {
	let notes: INote[] = Note.getAllNotes().map<INote>((x) => JSON.parse(x));

	if (notes.length !== 0) {
		notes = notes.filter((val) => !dateArr.includes(val.createdAt));
	}

	notes.forEach((note, index) => {
		const divElement = document.createElement('div');

		const titleSpan = document.createElement('span');
		titleSpan.classList.add('title');

		const descriptionSpan = document.createElement('span');
		descriptionSpan.classList.add('description');

		const createdAtSpan = document.createElement('span');
		createdAtSpan.classList.add('createdAt');

		divElement.style.backgroundColor = note.color;
		divElement.id = String(index);
		divElement.classList.add('note');

		titleSpan.textContent = note.title;
		descriptionSpan.textContent = note.description;
		createdAtSpan.textContent = note.createdAt;
		dateArr.push(note.createdAt);

		divElement.append(titleSpan, descriptionSpan, createdAtSpan);
		notesContainerElement.append(divElement);
	});
};
