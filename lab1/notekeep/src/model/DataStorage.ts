import { INote } from '../types/types';

export class DataStorage {
	// !!! Performance issue
	public static addToLocalStorage(note: INote) {
		let key = localStorage.length;

		if (!localStorage.key(key)) {
			localStorage.setItem(String(key), JSON.stringify(note));
		}

		return key;
	}

	public static getAllValues() {
		const notes: string[] = [];
		for (let i = 1; i < localStorage.length; i++) {
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
