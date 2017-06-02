// ./src/index.jsx
import React, { Component } from 'react';
import { render } from 'react-dom';

// Import routing components
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// Import custom components
import Home from './components/Home'
import Soccer from './components/Soccer'
import App from './components/App'
import Main from './components/Main'
import reducer from './reducers'


const store = createStore(reducer)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
     <Route component={Main}>
        <Route path="/" component={Home}/>
        <Route path="/soccer" component={Soccer}/>
        <Route path="/cricket" component={App}/>
        </Route>
    </Router>
    </Provider>,
    document.getElementById('root')
);
