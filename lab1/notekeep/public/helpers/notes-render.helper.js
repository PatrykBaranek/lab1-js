import { Note } from '../model/Note.js';
let notesContainerElement = document.querySelector('.notes');
const dateArr = [];
export const render = () => {
    const notes = Note.getAllNotes().map((x) => JSON.parse(x));
    const notesToRender = notes.filter((val) => !dateArr.includes(val.createdAt));
    notesToRender.forEach((note, index) => {
        const divElement = document.createElement('div');
        const titleSpan = document.createElement('span');
        titleSpan.classList.add('title');
        const descriptionSpan = document.createElement('span');
        descriptionSpan.classList.add('description');
        const createdAtSpan = document.createElement('span');
        createdAtSpan.classList.add('createdAt');
        divElement.style.backgroundColor = note.color;
        divElement.id = String(index);
        divElement.classList.add('note');
        titleSpan.textContent = note.title;
        descriptionSpan.textContent = note.description;
        createdAtSpan.textContent = note.createdAt;
        dateArr.push(note.createdAt);
        divElement.append(titleSpan, descriptionSpan, createdAtSpan);
        notesContainerElement.append(divElement);
    });
    console.log(notes);
};
