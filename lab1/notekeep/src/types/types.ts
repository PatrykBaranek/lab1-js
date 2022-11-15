export enum Color {
	RED = 'red',
	BLUE = 'blue',
	YELLOW = 'yellow',
	GREEN = 'green',
}

export interface INote {
	title: string;
	description: string;
	color: Color;
	isPined: boolean;
	createdAt: Date;
}
