import { createStore } from 'redux'
import { persistStore } from 'redux-persist'
import reducer from './reducer/index'

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const persistor = persistStore(store);