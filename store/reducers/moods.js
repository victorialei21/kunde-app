import { ADD_MOOD } from '../actions/moods';

const initialState = {
	moods: [],
};

const moodsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MOOD:
			const addedMoodValue = action.value;
			const addedMoodTime = action.time;
			return Object.assign({}, state, {
				moods: [
					...state.moods,
					{
						value: addedMoodValue,
						time: addedMoodTime,
					},
				],
			});
		default:
			return state;
	}
};

export default moodsReducer;
