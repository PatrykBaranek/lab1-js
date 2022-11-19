import { DataStorage } from '../model/DataStorage.js';
let notesContainerElement = document.querySelector('.note-container');
export const render = () => {
    const notes = DataStorage.getAllValues().map((x) => JSON.parse(x));
    notes.forEach((note, index) => {
        const divElement = document.createElement('div');
        const titleSpan = document.createElement('span');
        const descriptionSpan = document.createElement('span');
        const createdAtSpan = document.createElement('span');
        divElement.style.backgroundColor = note.color;
        divElement.id = String(index);
        divElement.classList.add('note');
        titleSpan.textContent = note.title;
        descriptionSpan.textContent = note.description;
        createdAtSpan.textContent = note.createdAt;
        divElement.append(titleSpan, descriptionSpan, createdAtSpan);
        notesContainerElement.appendChild(divElement);
    });
};
