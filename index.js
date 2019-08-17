import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import ReduxDemo from "./ReduxDemo" 
import Counter from "./Counter" 
import {createStore} from 'redux'
import {Provider} from 'react-redux'


//reducer needs to return the initial value when called for the first time
const initialState={
  count:0,
  results:[]
};

//it takes the current state and an action and returns NewState
function reducer(state=initialState,action){
  
  switch(action.type){
    case 'INCREMENT':
    return{
      ...state,
      count:state.count+1
    }
    case 'DECREMENT':
    return{
      ...state,
      count:state.count-1
    }
    case 'RESET':
    return{
      ...state,
      count:0
    }

    case 'STORE_RESULT':
      return{
        ...state,
        results: state.results.concat({id:new Date(),value:state.count})
      }

    case 'DELETE_RESULT':
    const updatedResult=state.results.filter(result=>result.id!==action.resultElId)
    return{
      ...state,
      results : updatedResult
    }
    default:
     return state;
  }
}

const store=createStore(reducer);



{/*
every call to dispatch results in call to reducer.

  store.dispatch({type:"INCREMENT" })
  store.dispatch({type:"INCREMENT" })
  store.dispatch({type:"DECREMENT" })
  store.dispatch({type:"RESET" })
*/}


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
       
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
