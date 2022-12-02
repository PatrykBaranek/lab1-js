import { Note } from '../model/Note.js';
import { Color } from '../types/types.js';
import { render as renderNotes } from './notes-render.helper.js';
// Create render method which show pop-up component with adding or editing note inputs
const menuDivContainer = document.querySelector('.menu-container');
let divFormContainerElement;
export const render = () => {
    if (menuDivContainer.hasAttribute('filled')) {
        return;
    }
    divFormContainerElement = document.createElement('div');
    const closeFormBtn = document.createElement('button');
    const formElement = renderAllFields();
    const addButtonElement = document.createElement('button');
    formElement.id = 'add-form';
    formElement.method = 'post';
    closeFormBtn.id = 'close-form-btn';
    closeFormBtn.innerHTML = '&times;';
    divFormContainerElement.classList.add('form-container');
    addButtonElement.classList.add(`form-container__btnAdd`);
    addButtonElement.textContent = 'Save Note';
    menuDivContainer.appendChild(divFormContainerElement);
    divFormContainerElement.appendChild(closeFormBtn);
    divFormContainerElement.appendChild(formElement);
    formElement.appendChild(addButtonElement);
    menuDivContainer.setAttribute('filled', String(true));
    closeFormBtn.addEventListener('click', closeAddEditForm);
    addButtonElement.addEventListener('click', (e) => {
        postData(e);
        renderNotes();
    });
};
const renderAllFields = () => {
    const noteInstance = new Note('test', 'descripiton', Color.BLUE, true);
    const noteProps = Object.getOwnPropertyNames(noteInstance);
    const formElement = document.createElement('form');
    noteProps.forEach((propName) => {
        if (propName === 'createdAt' || propName === 'id') {
            return;
        }
        const divElement = document.createElement('div');
        const inputElement = document.createElement('input');
        const labelElmenet = document.createElement('label');
        const colorSelectElement = renderColorSelectElement();
        formElement.appendChild(divElement);
        divElement.appendChild(labelElmenet);
        if (propName === 'color') {
            divElement.append(colorSelectElement);
        }
        else if (propName === 'isPined') {
            inputElement.type = 'checkbox';
            divElement.append(inputElement);
        }
        else {
            divElement.appendChild(inputElement);
        }
        divElement.classList.add(`div-${propName}`);
        labelElmenet.classList.add(`label-${propName}`);
        inputElement.classList.add(`input-${propName}`);
        inputElement.id = propName;
        inputElement.name = `${propName}`;
        inputElement.id = `${propName}`;
        inputElement.setAttribute('required', 'required');
        labelElmenet.textContent = propName + '  ';
        labelElmenet.setAttribute('for', `${propName}`);
    });
    return formElement;
};
const renderColorSelectElement = () => {
    const colorKeyArray = Object.keys(Color);
    const selectElement = document.createElement('select');
    selectElement.id = 'color';
    for (let i = 0; i < colorKeyArray.length; i++) {
        const optionElement = document.createElement('option');
        optionElement.value = colorKeyArray[i];
        optionElement.textContent = colorKeyArray[i];
        selectElement.appendChild(optionElement);
    }
    return selectElement;
};
const closeAddEditForm = () => {
    menuDivContainer.removeAttribute('filled');
    divFormContainerElement.remove();
};
const postData = (e) => {
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
    const newNote = new Note(data.title, data.description, data.color, data.isPined);
    console.log(newNote);
    newNote.createNewNote();
    closeAddEditForm();
};
