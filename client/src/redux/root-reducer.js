import { combineReducers } from 'redux';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import todoReducers from './todo/todo.reducers';

const persistConfig = {
	key: 'root',
	storage: storage,
	whitelist: [''],
};
export const rootReducer = combineReducers({
	todos: todoReducers,
});
export default persistReducer(persistConfig, rootReducer);
