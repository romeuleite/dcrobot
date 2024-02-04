import { createStore } from 'redux';
import colorChangeReducer from './reducers/colorChange';
import counterReducer from './reducers/counter';

//const store = createStore(counterReducer);
const store = createStore(colorChangeReducer);

export default store;

