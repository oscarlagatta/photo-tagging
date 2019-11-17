import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import '@babel/polyfill';
import App from './app';

import { applyMiddleware, createStore } from 'redux';
import { promiseMiddleware } from './middleware';

import './styles.css';

const defaultState = {
   appName: 'JatoNet Tagging', 
   articles: null 
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'HOME_PAGE_LOADED':
      return { ...state, articles: action.payload.articles };
  }
  return state;
};

const store = createStore(reducer, applyMiddleware(promiseMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
