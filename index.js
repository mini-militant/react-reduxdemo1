import React, { Component } from 'react';
import { render } from 'react-dom';

import './style.css';
import ReduxDemo from "./ReduxDemo" 
import Counter from "./Counter" 
import counterReducer from './reducers/count'
import resultReducer from './reducers/results'
import {createStore,combineReducers,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'


//reducer needs to return the initial value when called for the first time
const rootReducer=combineReducers({
  ctr:counterReducer,
  strResults:resultReducer
})

const store=createStore(rootReducer,applyMiddleware(thunk));

class App extends Component {
  
  render() {
    return (
      <div>       
       
         { /*
           Must provide the store to our app.
           So we need a provider Component to make the store available
           so the provider takes one "prop" -store so we provide with "redux store" 
        */ }
        <Provider store={store}> 
        <Counter/>
        </Provider>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
