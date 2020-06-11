/* export class APIYandex {
	public text: string; // English word
	public ts: string; // transcription
	public tr: object; // translate
	public pos: string; // Part of speech
	public ex: string; // example
	public def: string;

	 constructor(
		id: number,
		text: string,
		ts: string,
		tr: object,
		pos: string,
		ex: string) {
		this.id = id;
		this.text = text;
		this.ts = ts;
		this.tr = tr;
		this.pos = pos;
		this.ex = ex;
	}

	constructor(value: {}) {
		Object.assign(this, value);
	  }
}
 */

// tslint:disable-next-line: no-namespace
export namespace APIYandex {
	// tslint:disable-next-line: no-empty-interface
	export interface Head {
	}

	export interface Syn {
		text: string;
		pos: string;
		gen: string;
		asp: string;
	}

	export interface Mean {
		text: string;
	}

	export interface Tr2 {
		text: string;
	}

	export interface Ex {
		text: string;
		tr: Tr2[];
	}

	export interface Tr {
		text: string;
		pos: string;
		gen: string;
		syn: Syn[];
		mean: Mean[];
		ex: Ex[];
		asp: string;
	}

	export interface Def {
		text: string;
		pos: string;
		ts: string;
		tr: Tr[];
	}

	export interface RootObject {
		head: Head;
		def: Def[];
	}
}
