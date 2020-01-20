import { TodoActionTypes } from './todo.types';
import axios from 'axios';

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
		const res = await axios.get(`/todos`);

		dispatch({
			type: TodoActionTypes.GET_TODOS,
			payload: res.data,
		});
	} catch (err) {
		// dispatch({
		//     type: TodoActionTypes.TODO_ERROR,
		//     payload: {msg: err.response.statusText, status: err.response.status}
		// })
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
		const res = await axios.post(`/todos/${id}`);

		dispatch({
			type: TodoActionTypes.DELETE_TODO,
			payload: { id, todo: res.data },
		});
		// dispatch(setAlert("Todo Removed", "danger"))
	} catch (err) {
		// dispatch({
		//     type: TodoActionTypes.TODO_ERROR,
		//     payload: {msg: err.response.statusText, status: err.response.status}
		// })
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

		const res = await axios.post(`/todos`, formdata, config);

		dispatch({
			type: TodoActionTypes.ADD_TODO,
			payload: res.data,
		});
		//    dispatch(setAlert("Todo Created" , 'success'))
	} catch (err) {
		//    const errors = err.response.data.errors;
		console.log(err);
		//    if(errors){
		//        errors.forEach(error => dispatch(setAlert(error.msg, 'danger ')))
		//    }
		//    dispatch({
		//        type: TodoActionTypes.TODO_ERROR,
		//        payload: {msg: err.response.statusText, status: err.response.status}
		//    })
	}
};
