import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import ReduxDemo from "./ReduxDemo" 
import Counter from "./Counter" 
import {createStore} from 'redux'

//reducer needs to return the initial value when called for the first time
const initialState={
  count:0
};

//it takes the current state and an action and returns NewState
function reducer(state=initialState,action){
  console.log('reducer',state,action);
  return state;
}

const store=createStore(reducer);
{
  type:"ADD_ITEM"
  item:"APPLE"
}
//every call to dispatch results in call to reducer.
store.dispatch({type:"ADD_ITEM"})

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
        
        <Counter/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
