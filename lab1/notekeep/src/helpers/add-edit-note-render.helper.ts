import { DataStorage } from '../model/DataStorage.js';
import { Note } from '../model/Note.js';
import { Color, DataFromForm, InputTypes } from '../types/types.js';
import { render as renderNotes } from '../helpers/notes-render.helper.js';

// Create render method which show pop-up component with adding or editing note inputs

let data: DataFromForm;
const menuDivContainer = document.querySelector(
	'.menu-container'
) as HTMLDivElement;
let divFormContainerElement: HTMLDivElement;

export const render = (e: Event) => {
	if (menuDivContainer.hasAttribute('filled')) {
		return;
	}

	divFormContainerElement = document.createElement('div');
	const formElement = renderAllFields();
	const closeFormBtn = document.createElement('button');
	const buttonElement = document.createElement('button');

	formElement.id = 'add-form';
	closeFormBtn.id = 'close-form-btn';
	closeFormBtn.innerHTML = '&times;';

	divFormContainerElement.classList.add('form-container');
	buttonElement.classList.add(`form-container__btnAdd`);

	if (e.target instanceof HTMLButtonElement) {
		const buttonType = e.target.textContent;
		buttonElement.textContent = buttonType;
	}

	menuDivContainer.appendChild(divFormContainerElement);
	divFormContainerElement.appendChild(closeFormBtn);
	divFormContainerElement.appendChild(formElement);
	formElement.appendChild(buttonElement);

	menuDivContainer.setAttribute('filled', String(true));

	closeFormBtn.addEventListener('click', closeAddEditForm);
	buttonElement.addEventListener('click', (e: Event) => {
		postData(e);
		renderNotes();
	});
};

type fieldsRender = () => HTMLFormElement;

const renderAllFields: fieldsRender = () => {
	const noteInstance = new Note('test', 'descripiton', Color.BLUE, true);
	const noteProps = Object.getOwnPropertyNames(noteInstance);

	const formElement: HTMLFormElement = document.createElement('form');

	noteProps.forEach((propName) => {
		if (propName === 'createdAt' || propName === 'id') {
			return;
		}

		const divElement = document.createElement('div');
		const inputElement = document.createElement('input');
		const labelElmenet = document.createElement('label');

		const colorInputs = renderInputs({
			inputElement: inputElement,
			parentElement: divElement,
			propName: propName,
		}) as HTMLInputElement[];

		formElement.appendChild(divElement);
		divElement.appendChild(labelElmenet);
		if (propName === 'color') {
			divElement.append(...colorInputs);
		} else {
			divElement.append(inputElement);
		}

		divElement.classList.add(`div-${propName}`);
		labelElmenet.classList.add(`label-${propName}`);
		inputElement.classList.add(`input-${propName}`);
		inputElement.id = propName;

		inputElement.name = `${propName}`;
		inputElement.id = `${propName}`;
		inputElement.setAttribute('required', 'required');
		labelElmenet.textContent = propName + ' : ';
		labelElmenet.setAttribute('for', `${propName}`);
	});

	return formElement;
};

type inputTypeRender = (data: InputTypes) => HTMLElement[] | undefined;

const renderInputs: inputTypeRender = (data: InputTypes) => {
	switch (data.propName) {
		case 'color':
			const colorInputArray: HTMLElement[] = [];
			const colorKeyArray = Object.keys(Color);
			for (let i = 0; i < colorKeyArray.length; i++) {
				const inputLabelContainer = document.createElement('div');
				const newInputElement = document.createElement('input');
				const newSpanElement = document.createElement('span');

				inputLabelContainer.classList.add(
					'color-input-label-container',
					`input-label-${colorKeyArray[i].toLowerCase()}`
				);

				newInputElement.classList.add('input-color');
				newInputElement.type = 'checkbox';
				newInputElement.id = `${colorKeyArray[i]}`;
				newInputElement.name = 'color';
				newInputElement.setAttribute('required', 'required');
				newSpanElement.textContent = colorKeyArray[i];

				inputLabelContainer.append(newSpanElement, newInputElement);
				colorInputArray.push(inputLabelContainer);
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

const postData = (e: Event) => {
	e.preventDefault();

	const title = document.getElementById('title') as HTMLInputElement;
	const description = document.getElementById(
		'description'
	) as HTMLInputElement;
	const colors = [
		...document.querySelectorAll('.input-color'),
	] as unknown as HTMLInputElement[];
	const isPined = document.getElementById('isPined') as HTMLInputElement;

	const selectedColor = colors.find((x) => {
		if (x.checked) {
			return x.id;
		}
	}) as HTMLInputElement;

	data = {
		title: title.value,
		description: description.value,
		isPined: isPined.checked,
		color: Object.values(Color).find((x) => x === selectedColor.id) as Color,
	};

	const newNote = new Note(
		data.title,
		data.description,
		data.color,
		data.isPined
	);

	newNote.createNewNote();

	closeAddEditForm();
};
