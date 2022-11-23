import { DataStorage } from '../model/DataStorage.js';
export const editNoteForm = (e) => {
    if (e.target instanceof HTMLDivElement) {
        console.log(e.target);
        console.log(DataStorage.getValue(Number(e.target.id) + 1));
        const title = e.target.querySelector('.title');
        const description = e.target.querySelector('.description');
        const createdAt = e.target.querySelector('.createdAt');
        console.log(title, description, createdAt);
        const buttonsObject = handleDetails({
            title: title,
            description: description,
        });
        buttonsObject.editBtn.addEventListener('click', () => console.log('edit'));
        buttonsObject.closeBtn.addEventListener('click', () => console.log('close'));
        buttonsObject.deleteBtn.addEventListener('click', () => console.log('delete'));
    }
};
const handleDetails = (dataToDisplay) => {
    const closeDetailsBtn = document.createElement('button');
    const deleteNoteBtn = document.createElement('button');
    const editNoteBtn = document.createElement('button');
    closeDetailsBtn.innerHTML = '&times;';
    deleteNoteBtn.textContent = 'Delete Note';
    editNoteBtn.textContent = 'Edit Note';
    const detailsContainerElement = document.createElement('div');
    detailsContainerElement.classList.add('details-container');
    detailsContainerElement.append(dataToDisplay.title, dataToDisplay.description, closeDetailsBtn, deleteNoteBtn, editNoteBtn);
    document.body.appendChild(detailsContainerElement);
    const buttons = {
        closeBtn: closeDetailsBtn,
        deleteBtn: deleteNoteBtn,
        editBtn: editNoteBtn,
    };
    return buttons;
};
