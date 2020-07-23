export const COMPLETE_TASK = 'COMPLETE_TASK';

export const completeTask = (value, time) => {
	return { type: COMPLETE_TASK, value, time };
};
