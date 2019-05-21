import React from "react"
import { createStore} from "redux"
class ReduxDemo extends React.Component{
  render(){

//Step 2: state n action
const reducer =(state,action)=>{
  if(action.type==="ATTACK"){
    return action.payload;
  }
  return state;
}

//Step 1: Store :reducer and state
const store=createStore(reducer,"Peace");



//Step 3:subscribe
store.subscribe(()=>{
  console.log("Store is now ",store.getState());
})

//Step 4:dispatch action
store.dispatch({
  type:"ATTACK",
  payload:"attacked"
})


    return(
      <div>
      Hello
      </div>
    );
  }
  
}

export default ReduxDemo