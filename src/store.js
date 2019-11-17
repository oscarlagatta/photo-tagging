
import { applyMiddleware, createStore } from 'redux';
import { promiseMiddleware } from './middleware';

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

 export default store;