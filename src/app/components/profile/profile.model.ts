export class Profile {
	public id: number;
	public src?: string;
	public nickname?: string;

	constructor(id: number) {
		this.id = id;
	}
}
