export interface TranslateState {
	id: number;
	word: string;
	wordTranslate: string[];
	error: string;
}

export const featureKeyTranslate: 'TRANSLATE' = 'TRANSLATE';

export const initialState: TranslateState = {
	id: 0,
	word: '',
	wordTranslate: [],
	error: '',

};
