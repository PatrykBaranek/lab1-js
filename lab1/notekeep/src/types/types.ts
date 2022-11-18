export enum Color {
	RED = '#FF0000',
	BLUE = '#0000FF',
	YELLOW = '#FFFF00',
	GREEN = '#008000',
}

export interface DataFromForm {
	title: string;
	description: string;
	isPined: boolean;
	color: string;
}

export interface InputTypes {
	inputElement: HTMLInputElement;
	parentElement: HTMLDivElement;
	propName: string;
}

export interface INote {
	title: string;
	description: string;
	color: Color;
	isPined: boolean;
	createdAt: Date;
}
