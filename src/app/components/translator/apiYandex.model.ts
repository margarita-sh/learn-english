
// tslint:disable-next-line: no-namespace
export namespace APIYandex {
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
