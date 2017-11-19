import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';



import rootReducer from './reducers';
import FetchCountries from './components/fetch_country';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>

<BrowserRouter>
    	<div>
    	<Switch>
    	    <Route path="/" component= {FetchCountries} />
    	</Switch>
    	</div>
    </BrowserRouter>
  </Provider>
  
  , document.querySelector('.container'));
