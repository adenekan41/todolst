import { TodoActionTypes } from './todo.types';
import API from '../api';
// import API from 'API';

/**  Get Current User Profile
 * @param {GET} Method
 * @return {Current Users Todos} returns all the current users profile
 */

export const getTodos = () => async (dispatch) => {
	/**
	 * User type definition
	 * @typedef {Object} Todo
	 * @property {Object} [Todo]
	 */
	try {
		const res = await API.get(`/todos`);

		dispatch({
			type: TodoActionTypes.GET_TODOS,
			payload: res.data,
		});
	} catch (err) {
		throw err;
	}
};

/**  Get All User Profile
 * @param {DELETE} Method
 * @return {DELETE Todo} returns all the current users profile
 */
export const deleteTodo = (id) => async (dispatch) => {
	/**
	 * User type definition
	 * @typedef {Object} Todo
	 * @property {Object} [Todo]
	 */
	try {
		const res = await API.post(`/todos/${id}`);

		dispatch({
			type: TodoActionTypes.DELETE_TODO,
			payload: { id, todo: res.data },
		});
	} catch (err) {
		throw err;
	}
};

/**  Create / update User Profile
 * @param {POST} Method
 * @return { Message } returns all the current users profile
 */
export const createTodo = (formdata) => async (dispatch) => {
	/**
	 * User type definition
	 * @typedef {Formdata} Todo
	 * @property {Object} [Todo]
	 */
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const res = await API.post(`/todos`, formdata, config);

		dispatch({
			type: TodoActionTypes.ADD_TODO,
			payload: res.data,
		});
	} catch (err) {
		console.log(err);
	}
};
