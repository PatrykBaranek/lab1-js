import { Note } from '../../model/Note.js';
import { Color } from '../../types/types.js';
import { closeAddForm } from './add-note-render.helper.js';
const title = document.getElementById('title');
const description = document.getElementById('description');
const color = document.querySelector('select');
const isPined = document.getElementById('isPined');
export const postData = (e) => {
    e.preventDefault();
    const selectedColor = color.options[color.selectedIndex].text;
    const findColor = Object.values(Color).find((x) => x === selectedColor);
    if (title.value.trim().length === 0 ||
        description.value.trim().length === 0) {
        alert('Title or description cannot be empty!');
        return;
    }
    const data = {
        title: title.value,
        description: description.value,
        isPined: isPined.checked,
        color: findColor,
    };
    const newNote = new Note(data.title, data.description, data.color, data.isPined);
    newNote.createNewNote();
    resetInputs();
    closeAddForm();
    location.reload();
};
const resetInputs = () => {
    title.value = '';
    description.value = '';
};
