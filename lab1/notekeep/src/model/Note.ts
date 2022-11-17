import { Color, INote } from '../types/types';

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

	public static getAllProperties() {
		const properites: Array<string> = Object.keys(Note).map((key) => {
			return key;
		});

		return properites;
	}

	public static createNewNote(note: Note) {
		notes.push(note);
		localStorage.setItem(note.title, JSON.stringify(note));

		return localStorage.getItem(note.title);
	}

	public static getAllNotes() {
		return notes;
	}
}
