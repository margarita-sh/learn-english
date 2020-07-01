import { Word } from 'src/app/components/game/word.model';

export interface DictionaryState {
	dictionary: Word[];
	srcAudio: object;
}

export const featureKeyDictionary: 'DICTIONARY' = 'DICTIONARY';

export const initialState: DictionaryState = {
	dictionary: [],
	srcAudio: {}
};
