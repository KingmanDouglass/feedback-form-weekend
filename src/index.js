import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feelingsReducer = (state = [], action) => {
    if (action.type === 'ADD_FEELINGS') {
        return action.payload
    }
    return state;
}

const understandingReducer = (state = [], action) => {
    if (action.type === 'ADD_UNDERSTANDING') {
        return action.payload
    }
    return state;
}

const supportedReducer = (state = [], action) => {
    if (action.type === 'ADD_SUPPORTED') {
        return action.payload
    }
    return state;
}

const commentsReducer = (state = [], action) => {
    if (action.type === 'ADD_COMMENTS') {
        return action.payload
    }
    return state;
}


const storeInstance = createStore(
    combineReducers({
        feelingsReducer,
        understandingReducer,
        supportedReducer,
        commentsReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
