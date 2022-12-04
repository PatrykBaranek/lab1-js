import { INote } from '../types/types';

export class DataStorage {
	public static addToLocalStorage(note: INote) {
		let key = note.createdAt;
		localStorage.setItem(key, JSON.stringify(note));
		return key;
	}

	public static getAllValues() {
		const notes: string[] = [];
		for (let i = 0; i < localStorage.length; i++) {
			notes.push(localStorage.getItem(localStorage.key(i) as string) as string);
		}
		return notes;
	}

	public static RemoveAll() {
		localStorage.clear();
	}

	public static RemoveItemById(createdAt: string) {
		if (localStorage.getItem(createdAt)) {
			localStorage.removeItem(createdAt);
		}

		return console.error('Not Found Item');
	}
}
