export const ADD_MOOD = 'ADD_MOOD';

export const addMood = (value, time) => {
	return async (dispatch) => {
		const response = await fetch(
			'https://kunde-app-7f2e6.firebaseio.com/moods.json',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					value,
					time,
				}),
			}
		);

		const resData = await response.json();

		console.log(resData);

		dispatch({ type: ADD_MOOD, value, time });
	};
};
