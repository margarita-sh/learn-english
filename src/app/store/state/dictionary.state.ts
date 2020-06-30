import { Word } from 'src/app/components/game/word.model';

export interface DictionaryState {
	dictionary: Word[];
}

export const featureKeyDictionary: 'DICTIONARY' = 'DICTIONARY';

export const initialState: DictionaryState = {
	dictionary: [],
};
