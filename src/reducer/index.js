import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import users from './Users';
import orders from './Orders';
import presentUser from './PresentUser';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        'users',
        'orders',
        'presentUser'
    ]
}

const rootReducer = combineReducers({
    orders, 
    presentUser,
    users
});

export default persistReducer(persistConfig, rootReducer);