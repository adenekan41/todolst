import { TodoActionTypes } from './todo.types';

const initialState = {
	todos: [],
	loading: true,
	error: {},
};

export default function(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case TodoActionTypes.GET_TODOS:
			return {
				...state,
				todos: payload,
				loading: false,
			};
		case TodoActionTypes.DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter((post) => post._id !== payload.id),
				loading: false,
			};
		case TodoActionTypes.ADD_TODO:
			return {
				...state,
				todos: [payload, ...state.todos],
				loading: false,
			};
		case TodoActionTypes.TODO_ERROR:
			return {
				...state,
				error: null,
				loading: false,
			};

		default:
			return state;
	}
}
