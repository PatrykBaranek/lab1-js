import { Note } from '../../model/Note.js';
import { Color } from '../../types/types.js';
import { closeAddForm } from './add-note-render.helper.js';
export const postData = (e) => {
    e.preventDefault();
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const color = document.querySelector('select');
    const isPined = document.getElementById('isPined');
    const selectedColor = color.options[color.selectedIndex].text;
    const findColor = Object.values(Color).find((x) => x === selectedColor);
    const data = {
        title: title.value,
        description: description.value,
        isPined: isPined.checked,
        color: findColor,
    };
    const newNote = new Note('', data.title, data.description, data.color, data.isPined);
    console.log(newNote);
    newNote.createNewNote();
    closeAddForm();
};
