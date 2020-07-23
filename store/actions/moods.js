export const ADD_MOOD = 'ADD_MOOD';

export const addMood = (value, time) => {
	return { type: ADD_MOOD, value, time };
};
