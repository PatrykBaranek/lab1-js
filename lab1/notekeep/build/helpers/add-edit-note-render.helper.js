import { Note } from '../model/Note.js';
import { Color } from '../types/types.js';
// Create render method which show pop-up component with adding or editing note inputs
const menuDivContainer = document.querySelector('.menu-container');
let divFormContainerElement;
export const render = () => {
    if (menuDivContainer.hasAttribute('filled')) {
        return;
    }
    divFormContainerElement = document.createElement('div');
    divFormContainerElement.classList.add('form-container');
    const closeFormBtn = document.createElement('button');
    closeFormBtn.textContent = 'X';
    const formElement = renderAllFields();
    const buttonElement = document.createElement('button');
    buttonElement.textContent = 'Add Note';
    menuDivContainer.appendChild(divFormContainerElement);
    divFormContainerElement.appendChild(closeFormBtn);
    divFormContainerElement.appendChild(formElement);
    formElement.appendChild(buttonElement);
    closeFormBtn.addEventListener('click', closeAddEditForm);
    menuDivContainer.setAttribute('filled', String(true));
};
const renderAllFields = () => {
    const noteInstance = new Note('test', 'descripiton', Color.BLUE, true);
    const noteProps = Object.getOwnPropertyNames(noteInstance);
    const formElement = document.createElement('form');
    noteProps.forEach((propName) => {
        const divElement = document.createElement('div');
        const inputElement = document.createElement('input');
        const labelElmenet = document.createElement('label');
        formElement.appendChild(divElement);
        divElement.classList.add(`div-${propName}`);
        divElement.appendChild(labelElmenet);
        labelElmenet.classList.add(`label-${propName}`);
        divElement.appendChild(inputElement);
        inputElement.classList.add(`input-${propName}`);
        inputElement.name = `${propName}`;
        inputElement.id = `${propName}`;
        labelElmenet.textContent = propName + ' : ';
        labelElmenet.setAttribute('for', `${propName}`);
    });
    return formElement;
};
const closeAddEditForm = () => {
    menuDivContainer.removeAttribute('filled');
    divFormContainerElement.remove();
};
