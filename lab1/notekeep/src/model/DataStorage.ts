import { Note } from './Note.js';

export class DataStorage {
	public key: string;
	private value: string;

	constructor(note: Note) {
		this.key = String(localStorage.length);
		this.value = JSON.stringify(note);
	}

	public addToLocalStorage() {
		localStorage.setItem(this.key, this.value);
	}

	public static getValue(index: number) {
		return localStorage.getItem(index.toString());
	}

	public static RemoveItem(index: number) {
		localStorage.removeItem(index.toString());
	}

	public static getAllValues() {
		const notes: string[] = [];
		for (let i = 1; i < localStorage.length; i++) {
			notes.push(localStorage.getItem(i.toString()) as string);
		}
		return notes;
	}

	public static RemoveAll() {
		localStorage.clear();
	}

	public static RemoveItemWithKey(key: number) {
		if (localStorage.getItem(key.toString())) {
			localStorage.removeItem(key.toString());
		}

		return 'Not Found Item';
	}
}
