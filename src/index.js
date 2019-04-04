import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from "redux";


const action = {
    type: 'GREET',
    payload: {
        greet: 'Hello'
    }
}

function reducer(state = {greet: ''}, action) {
    switch(action.type) {
        case 'GREET':
            return action.payload.greet
        default:
            return state
    }
};

const store = createStore(reducer);

store.dispatch(action);

ReactDOM.render(
    <Provider store={store}>
        <App greet={store.getState()}/>
    </Provider>,
    document.getElementById('root')
);

