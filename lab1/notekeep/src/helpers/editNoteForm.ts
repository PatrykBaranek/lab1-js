import { DataStorage } from '../model/DataStorage.js';
import { Color } from '../types/types.js';
import { render } from './add-note-render.helper.js';

export const editNoteForm = (e: Event) => {
	if (e.target instanceof HTMLDivElement) {
		console.log(e.target.id);
		console.log(DataStorage.getValue(Number(e.target.id) + 1));
	}
};
