import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import '@babel/polyfill';

import {createStore } from 'redux';
import App from './app';

import './styles.css';



const defaultState = { appName: 'JatoNet Tagging'};

const reducer = (state = defaultState, action) => {
    switch (action.tyep) {
        case 'TOGGLE': 
            return {...state, checked: !state.checked}
    }
    return state;
}

const store = createStore(reducer);


ReactDOM.render((
<Provider store={store}>
    <App />
</Provider>
), document.getElementById('app'));
