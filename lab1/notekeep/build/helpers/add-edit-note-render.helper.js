// <!-- Rendering component -->
// 			<!-- <form>
// 				<div>
// 					<input type="text" name="add-note" id="add-note" />
// 					<label for="add-note"></label>
// 				</div>
// 				<button>Add Note</button>
// 			</form> -->
import { Note } from '../model/Note.js';
import { Color } from '../types/types.js';
// Create render method which show pop-up component with adding or editing note inputs
const noteInstance = new Note('test', 'descripiton', Color.BLUE, true);
const noteProps = Object.getOwnPropertyNames(noteInstance);
export const render = () => {
    const menuDivContainer = document.querySelector('.menu-container');
    const buttonElement = document.createElement('button');
    buttonElement.textContent = 'Add Note';
    const formElement = renderAllFields();
    formElement.appendChild(buttonElement);
    menuDivContainer.appendChild(formElement);
};
const renderAllFields = () => {
    const formElement = document.createElement('form');
    noteProps.forEach((propName) => {
        const divElement = document.createElement('div');
        const inputElement = document.createElement('input');
        const labelElmenet = document.createElement('label');
        formElement.appendChild(divElement);
        divElement.classList.add(`div-${propName}`);
        divElement.appendChild(inputElement);
        inputElement.classList.add(`input-${propName}`);
        divElement.appendChild(labelElmenet);
        labelElmenet.classList.add(`label-${propName}`);
        // inputElement.name = `${propName}`;
        // inputElement.id = `${propName}`;
        // labelElmenet.setAttribute('for', `${propName}`);
    });
    return formElement;
};
