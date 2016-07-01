import { createStore } from 'redux';
import rootReducer from './reducers';g

export const store = createStore(rootReducer);