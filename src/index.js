import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '@babel/polyfill';
import App from './App';
import './styles.css';
import store from './store';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        {/* <Route path="/home" component={Home} /> */}
        
      </Switch>
    </Router>
    {/* <App /> */}
  </Provider>,
  document.getElementById('app')
);
