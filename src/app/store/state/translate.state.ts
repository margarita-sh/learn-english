export interface TranslateState {
	id: number;
	wordRu: string;
	wordEng: string;
}

export const featureKeyTranslate: 'TRANSLATE' = 'TRANSLATE';

export const initialState: TranslateState = {
	id: 0,
	wordRu: '',
	wordEng: ''
};
