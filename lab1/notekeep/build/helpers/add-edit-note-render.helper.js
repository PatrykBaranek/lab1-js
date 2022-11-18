import { DataStorage } from '../model/DataStorage.js';
import { Note } from '../model/Note.js';
import { Color } from '../types/types.js';
// Create render method which show pop-up component with adding or editing note inputs
export let data;
const menuDivContainer = document.querySelector('.menu-container');
let divFormContainerElement;
export const render = (e) => {
    if (menuDivContainer.hasAttribute('filled')) {
        return;
    }
    divFormContainerElement = document.createElement('div');
    divFormContainerElement.classList.add('form-container');
    const closeFormBtn = document.createElement('button');
    closeFormBtn.textContent = 'X';
    closeFormBtn.id = 'close-form-btn';
    const formElement = renderAllFields();
    formElement.id = 'add-form';
    const buttonElement = document.createElement('button');
    buttonElement.classList.add(`form-container__btnAdd`);
    if (e.target instanceof HTMLButtonElement) {
        const buttonType = e.target;
        buttonElement.textContent = buttonType.textContent;
    }
    menuDivContainer.appendChild(divFormContainerElement);
    divFormContainerElement.appendChild(closeFormBtn);
    divFormContainerElement.appendChild(formElement);
    formElement.appendChild(buttonElement);
    menuDivContainer.setAttribute('filled', String(true));
    closeFormBtn.addEventListener('click', closeAddEditForm);
    buttonElement.addEventListener('click', postData);
    buttonElement.addEventListener('click', () => {
        console.log(data);
    });
};
const renderAllFields = () => {
    const noteInstance = new Note('test', 'descripiton', Color.BLUE, true);
    const noteProps = Object.getOwnPropertyNames(noteInstance);
    const formElement = document.createElement('form');
    noteProps.forEach((propName) => {
        if (propName === 'createdAt') {
            return;
        }
        const divElement = document.createElement('div');
        const inputElement = document.createElement('input');
        const labelElmenet = document.createElement('label');
        const colorInputs = inputTypeChanger({
            inputElement: inputElement,
            parentElement: divElement,
            propName: propName,
        });
        formElement.appendChild(divElement);
        divElement.appendChild(labelElmenet);
        if (propName === 'color') {
            divElement.append(...colorInputs);
        }
        else {
            divElement.append(inputElement);
        }
        divElement.classList.add(`div-${propName}`);
        labelElmenet.classList.add(`label-${propName}`);
        inputElement.classList.add(`input-${propName}`);
        inputElement.id = propName;
        inputElement.name = `${propName}`;
        inputElement.id = `${propName}`;
        labelElmenet.textContent = propName + ' : ';
        labelElmenet.setAttribute('for', `${propName}`);
    });
    return formElement;
};
const inputTypeChanger = (data) => {
    switch (data.propName) {
        case 'color':
            const colorInputArray = [];
            const colorKeyArray = Object.keys(Color);
            for (let i = 0; i < colorKeyArray.length; i++) {
                const newInputElement = document.createElement('input');
                const newSpanElement = document.createElement('span');
                newInputElement.classList.add('input-color');
                newInputElement.type = 'checkbox';
                newInputElement.id = `${colorKeyArray[i]}`;
                newInputElement.name = 'color';
                newSpanElement.textContent = colorKeyArray[i];
                colorInputArray.push(newSpanElement);
                colorInputArray.push(newInputElement);
            }
            return colorInputArray;
        case 'isPined':
            data.inputElement.type = 'checkbox';
            break;
    }
};
const closeAddEditForm = () => {
    menuDivContainer.removeAttribute('filled');
    divFormContainerElement.remove();
};
const postData = (e) => {
    e.preventDefault();
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const colors = [
        ...document.querySelectorAll('.input-color'),
    ];
    const isPined = document.getElementById('isPined');
    const selectedColor = colors.find((x) => {
        if (x.checked) {
            return x.id;
        }
    });
    data = {
        title: title.value,
        description: description.value,
        isPined: isPined.checked,
        color: Object.values(Color).find((x) => x === selectedColor.id),
    };
    const newNote = new Note(data.title, data.description, data.color, data.isPined);
    newNote.createNewNote();
    closeAddEditForm();
    DataStorage.getAllValues();
};
