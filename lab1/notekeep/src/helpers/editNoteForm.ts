import { Note } from '../model/Note.js';

export const editNoteForm = (e: Event) => {
	if (e.target instanceof HTMLDivElement) {
		const title = e.target.querySelector('.title') as HTMLElement;
		const description = e.target.querySelector('.description') as HTMLElement;
		const createdAt = e.target.querySelector('.createdAt') as HTMLElement;

		console.log(title, description, createdAt);

		const { closeBtn, editBtn, deleteBtn } = handleDetails({
			title: title.textContent as string,
			description: description.textContent as string,
		});

		editBtn.addEventListener('click', () => {
			console.log('edit');
		});

		closeBtn.addEventListener('click', (e: Event) => {
			if (e.target instanceof HTMLButtonElement) {
				e.target.parentElement?.remove();
			}
		});

		deleteBtn.addEventListener('click', () => {
			Note.deleteNoteById(createdAt.textContent as string);
		});
	}
};

interface detailsTypes {
	title: string;
	description: string;
}

interface createdButtonsTypes {
	closeBtn: HTMLButtonElement;
	deleteBtn: HTMLButtonElement;
	editBtn: HTMLButtonElement;
}

const handleDetails: (dataToDisplay: detailsTypes) => createdButtonsTypes = (
	dataToDisplay
) => {
	const buttonsDivElement = document.createElement('div');
	buttonsDivElement.classList.add('buttons-details-container');

	const closeDetailsBtn = document.createElement('button');
	closeDetailsBtn.innerHTML = '&times;';
	closeDetailsBtn.classList.add('close-details-btn');

	const deleteNoteBtn = document.createElement('button');
	deleteNoteBtn.textContent = 'Delete Note';
	deleteNoteBtn.classList.add('delete-note-btn');

	const editNoteBtn = document.createElement('button');
	editNoteBtn.textContent = 'Edit Note';
	editNoteBtn.classList.add('edit-note-btn');

	const detailsContainerElement = document.createElement('div');
	detailsContainerElement.classList.add('details-container');

	const { titleElement, descriptionElement } =
		createHtmlElementsForData(dataToDisplay);

	buttonsDivElement.append(deleteNoteBtn, editNoteBtn);

	detailsContainerElement.append(
		titleElement,
		descriptionElement,
		closeDetailsBtn,
		buttonsDivElement
	);

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

const createHtmlElementsForData: (dataToDisplay: detailsTypes) => {
	titleElement: HTMLDivElement;
	descriptionElement: HTMLDivElement;
} = (dataToDisplay) => {
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

	titleDivElement.append(
		(document.createElement('p').textContent = 'Title'),
		titleElement
	);
	descripitonDivElement.append(
		(document.createElement('p').textContent = 'Description'),
		descriptionElement
	);

	return {
		titleElement: titleDivElement,
		descriptionElement: descripitonDivElement,
	};
};
