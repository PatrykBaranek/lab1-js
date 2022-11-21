import { DataStorage } from '../model/DataStorage.js';
export const editNoteForm = (e) => {
    if (e.target instanceof HTMLDivElement) {
        console.log(e.target.id);
        console.log(DataStorage.getValue(Number(e.target.id) + 1));
    }
};
