import { Color, INote } from '../types/types';

export class Note implements INote {
	public title: string;
	public description: string;
	public color: Color;
	public isPined: boolean;
	public createdAt: Date;

	constructor(
		title: string,
		description: string,
		color: Color,
		isPined: boolean,
		createdAt: Date
	) {
		this.title = title;
		this.description = description;
		this.color = color;
		this.isPined = isPined;
		this.createdAt = createdAt;
	}
}
