import { ADD_MOOD } from '../actions/moods';

const initialState = {
	moods: [],
};

const moodsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MOOD:
			return Object.assign({}, state, {
				moods: [
					...state.moods,
					{
						value: action.value,
					},
				],
			});
		default:
			return state;
	}
};

export default moodsReducer;
