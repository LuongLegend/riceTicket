import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import order from './order'
import user from './user'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user','order']
}

const rootReducer = combineReducers({order, user});

export default persistReducer(persistConfig, rootReducer);