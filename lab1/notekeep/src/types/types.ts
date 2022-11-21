export enum Color {
	RED = '#D81E5B',
	BLUE = '#006C67',
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
