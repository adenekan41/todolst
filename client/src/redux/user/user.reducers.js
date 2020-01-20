import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
	currentUser: null,
	isLoading: false,
	error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type) {
		default:
			return state;
	}
};

export default userReducer;
