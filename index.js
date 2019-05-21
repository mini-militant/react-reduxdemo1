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
  count:0
};

//it takes the current state and an action and returns NewState
function reducer(state=initialState,action){
  console.log('reducer',state,action);
  switch(action.type){
    case 'INCREMENT':
    return{
      count:state.count+1
    };
    case 'DECREMENT':
    return{
      count:state.count-1
    };
    case 'RESET':
    return{
      count:0
    };
    default:
     return state;
  }
}

const store=createStore(reducer);

store.subscribe(()=>{
  console.log("Count:",store.getState())
})

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
