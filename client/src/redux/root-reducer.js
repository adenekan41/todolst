import { combineReducers } from 'redux';

import userReducer from './user/user.reducers';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
	key: 'root',
	storage: storage,
	whitelist: ['user'],
};
export const rootReducer = combineReducers({
	user: userReducer,
});
export default persistReducer(persistConfig, rootReducer);
