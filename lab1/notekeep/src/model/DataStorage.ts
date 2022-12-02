import { INote } from '../types/types';

export class DataStorage {
	public static addToLocalStorage(note: INote) {
		let key: number;
		let exist: boolean = false;

		while (exist) {
			key = Math.floor(Math.random() * 1000);
			if (localStorage.getItem(key.toString())) {
				exist = true;
				localStorage.setItem(key.toString(), JSON.stringify(note));
				return key;
			}
		}
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

	public static RemoveItemById(createdAt: string) {
		if (localStorage.getItem(createdAt)) {
			localStorage.removeItem(createdAt);
		}

		return console.error('Not Found Item');
	}
}
