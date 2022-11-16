import { Note } from './Note';

class DataStorage {
	private key: number;
	private value: string;

	constructor(key: number, value: string) {
		this.key = key;
		this.value = value;
	}

	public static addToLocalStorage(note: Note) {}
}
