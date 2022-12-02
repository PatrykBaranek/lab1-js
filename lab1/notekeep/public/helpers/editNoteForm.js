import { DataStorage } from '../model/DataStorage.js';
export const editNoteForm = (e) => {
    if (e.target instanceof HTMLDivElement) {
        console.log(e.target);
        console.log(DataStorage.getValue(Number(e.target.id) + 1));
        const title = e.target.querySelector('.title');
        const description = e.target.querySelector('.description');
        const createdAt = e.target.querySelector('.createdAt');
        console.log(title, description, createdAt);
        const { closeBtn, editBtn, deleteBtn } = handleDetails({
            title: title.textContent,
            description: description.textContent,
        });
        editBtn.addEventListener('click', () => {
            console.log('edit');
        });
        closeBtn.addEventListener('click', (e) => {
            var _a;
            if (e.target instanceof HTMLButtonElement) {
                (_a = e.target.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
            }
        });
        deleteBtn.addEventListener('click', () => console.log('delete'));
    }
};
const handleDetails = (dataToDisplay) => {
    const buttonsDivElement = document.createElement('div');
    buttonsDivElement.classList.add('buttons-details-container');
    const closeDetailsBtn = document.createElement('button');
    const deleteNoteBtn = document.createElement('button');
    const editNoteBtn = document.createElement('button');
    closeDetailsBtn.innerHTML = '&times;';
    closeDetailsBtn.classList.add('close-details-btn');
    deleteNoteBtn.textContent = 'Delete Note';
    editNoteBtn.textContent = 'Edit Note';
    const detailsContainerElement = document.createElement('div');
    detailsContainerElement.classList.add('details-container');
    const { titleElement, descriptionElement } = createHtmlElementsForData(dataToDisplay);
    buttonsDivElement.append(deleteNoteBtn, editNoteBtn);
    detailsContainerElement.append(titleElement, descriptionElement, closeDetailsBtn, buttonsDivElement);
    document.body.appendChild(detailsContainerElement);
    const buttons = {
        closeBtn: closeDetailsBtn,
        deleteBtn: deleteNoteBtn,
        editBtn: editNoteBtn,
    };
    return buttons;
};
// <div class="title-details-container">
// 	<p class="title-details">title text</p>
// </div>
// <div>
const createHtmlElementsForData = (dataToDisplay) => {
    const titleDivElement = document.createElement('div');
    const titleElement = document.createElement('p');
    const descripitonDivElement = document.createElement('div');
    const descriptionElement = document.createElement('p');
    titleElement.textContent = dataToDisplay.title;
    descriptionElement.textContent = dataToDisplay.description;
    titleDivElement.classList.add('title-details-container');
    titleElement.classList.add('title-details');
    descripitonDivElement.classList.add('description-details-container');
    descriptionElement.classList.add('description-details');
    titleDivElement.append((document.createElement('p').textContent = 'Title'), titleElement);
    descripitonDivElement.append((document.createElement('p').textContent = 'Description'), descriptionElement);
    return {
        titleElement: titleDivElement,
        descriptionElement: descripitonDivElement,
    };
};
