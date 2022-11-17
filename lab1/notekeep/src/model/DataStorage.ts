import { Note } from './Note';

class DataStorage {
	private key: string;
	private value: string;

	constructor(value: Note) {
		this.key = String(localStorage.length);
		this.value = JSON.stringify(value);
	}

	public addToLocalStorage() {
		localStorage.setItem(this.key, this.value);
	}

	public RemoveItem() {
		localStorage.removeItem(this.key);
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
