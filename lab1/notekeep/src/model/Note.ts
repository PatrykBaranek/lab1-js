import { Color, INote } from '../types/types.js';
import { DataStorage } from './DataStorage.js';

export class Note implements INote {
	public title: string;
	public description: string;
	public color: Color;
	public isPined: boolean;
	public createdAt: string;

	constructor(
		title: string,
		description: string,
		color: Color,
		isPined: boolean
	) {
		this.title = title;
		this.description = description;
		this.color = color;
		this.isPined = isPined;
		this.createdAt = new Date().toLocaleString();
	}

	public createNewNote() {
		return DataStorage.addToLocalStorage(this);
	}

	public static getAllNotes() {
		const notes = DataStorage.getAllValues();
		return notes;
	}

	public static deleteNoteById(createdAt: string) {
		DataStorage.RemoveItemById(createdAt);
	}
}
