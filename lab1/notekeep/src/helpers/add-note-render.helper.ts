import { Note } from '../model/Note.js';
import { Color, DataFromForm } from '../types/types.js';
import { render as renderNotes } from './notes-render.helper.js';

// Create render method which show pop-up component with adding or editing note inputs

const menuDivContainer = document.querySelector(
	'.menu-container'
) as HTMLDivElement;
let divFormContainerElement: HTMLDivElement;

export const render: () => void = () => {
	if (menuDivContainer.hasAttribute('filled')) {
		return;
	}

	// <div>
	divFormContainerElement = document.createElement('div');
	const closeFormBtn = document.createElement('button');

	const formElement = renderAllFields();
	const buttonElement = document.createElement('button');

	formElement.id = 'add-form';
	formElement.method = 'post';
	closeFormBtn.id = 'close-form-btn';
	closeFormBtn.innerHTML = '&times;';

	divFormContainerElement.classList.add('form-container');
	buttonElement.classList.add(`form-container__btnAdd`);

	buttonElement.textContent = 'Save Note';

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

const renderAllFields: () => HTMLFormElement = () => {
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

		const colorSelectElement = renderColorSelectElement();

		formElement.appendChild(divElement);
		divElement.appendChild(labelElmenet);
		if (propName === 'color') {
			divElement.append(colorSelectElement);
		} else if (propName === 'isPined') {
			inputElement.type = 'checkbox';
			divElement.append(inputElement);
		} else {
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

const renderColorSelectElement: () => HTMLSelectElement = () => {
	const colorKeyArray = Object.keys(Color);
	const selectElement = document.createElement('select') as HTMLSelectElement;

	selectElement.id = 'color';
	for (let i = 0; i < colorKeyArray.length; i++) {
		const optionElement = document.createElement('option') as HTMLOptionElement;
		optionElement.value = colorKeyArray[i];
		optionElement.textContent = colorKeyArray[i];

		selectElement.appendChild(optionElement);
	}
	return selectElement;
};

const closeAddEditForm: () => void = () => {
	menuDivContainer.removeAttribute('filled');
	divFormContainerElement.remove();
};

const postData = (e: Event) => {
	e.preventDefault();

	const title = document.getElementById('title') as HTMLInputElement;
	const description = document.getElementById(
		'description'
	) as HTMLInputElement;
	const color = document.querySelector('select') as HTMLSelectElement;
	const isPined = document.getElementById('isPined') as HTMLInputElement;

	const selectedColor = color.options[color.selectedIndex].text;

	const findColor = Object.values(Color).find(
		(x) => x === selectedColor
	) as Color;

	const data: DataFromForm = {
		title: title.value,
		description: description.value,
		isPined: isPined.checked,
		color: findColor,
	};

	const newNote = new Note(
		data.title,
		data.description,
		data.color,
		data.isPined
	);

	console.log(newNote);

	newNote.createNewNote();

	closeAddEditForm();
};
