export interface CountState {
	count: number;
	updatedAt: number;
}

export const featureKeyCount: 'COUNT' = 'COUNT';

export const initialState: CountState = {
	count: 0,
	updatedAt: Date.now()
};
