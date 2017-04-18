import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise';

import rootReducer from '../reducer';

const enhancer = compose(
    applyMiddleware(thunkMiddleware)
)(createStore);

export default function configureStore(initialState) {
    return enhancer(rootReducer, initialState);
}
