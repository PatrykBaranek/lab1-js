export enum Color {
	RED = 0,
	BLUE = 1,
	YELLOW = 2,
	GREEN = 3,
}

export const colorTuple: [string, string][] = [
	['RED', '#f2493a'],
	['BLUE', '#3959f7'],
	['YELLOW', '#eff545'],
	['GREEN', '#4df752'],
];

export const getColor = (color: Color) => {
	return colorTuple[Object.values(Color).indexOf(color)][1];
};

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
