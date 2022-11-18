import { Color, INote } from '../types/types.js';
import { DataStorage } from './DataStorage.js';

const notes: Note[] = [];
export class Note implements INote {
	public title: string;
	public description: string;
	public color: Color;
	public isPined: boolean;
	public createdAt: Date;

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
		this.createdAt = new Date();
	}

	public createNewNote() {
		notes.push(this);

		const dataStorage = new DataStorage(this);
		dataStorage.addToLocalStorage();

		return dataStorage.getValue();
	}

	public static getAllNotes() {
		return notes;
	}
}
