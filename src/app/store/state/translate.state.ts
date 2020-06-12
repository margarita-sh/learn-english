export interface TranslateState {
	id: number;
	wordRu: string;
	wordEng: string[];
	error: string;
}

export const featureKeyTranslate: 'TRANSLATE' = 'TRANSLATE';

export const initialState: TranslateState = {
	id: 0,
	wordRu: '',
	wordEng: [],
	error: '',

};
