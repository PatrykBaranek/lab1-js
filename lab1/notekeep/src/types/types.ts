export enum Color {
	RED = 'RED',
	BLUE = 'BLUE',
	YELLOW = 'YELLOW',
	GREEN = 'GREEN',
}

export interface DataFromForm {
	title: string;
	description: string;
	isPined: boolean;
	color: Color;
}
export interface INote {
	title: string;
	description: string;
	color: Color;
	isPined: boolean;
	createdAt: string;
}
