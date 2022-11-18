import { Note } from './Note.js';

export class DataStorage {
	private key: string;
	private value: string;

	constructor(value: Note) {
		this.key = String(localStorage.length);
		this.value = JSON.stringify(value);
	}

	public addToLocalStorage() {
		localStorage.setItem(this.key, this.value);
	}

	public getValue() {
		return localStorage.getItem(this.key);
	}

	public RemoveItem() {
		localStorage.removeItem(this.key);
	}

	public static getAllValues() {
		const notes: string[] = [];
		for (let i = 1; i < localStorage.length; i++) {
			notes.push(localStorage.getItem(String(i)) as string);
		}
		return notes;
	}

	public static RemoveAll() {
		localStorage.clear();
	}

	public static RemoveItemWithKey(key: number) {
		if (localStorage.getItem(String(key))) {
			localStorage.removeItem(String(key));
		}

		return 'Not Found Item';
	}
}
