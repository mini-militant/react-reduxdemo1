import React from 'react'
import {connect} from 'react-redux'

// Takes entire redux state and is expected to return an object where the
// keys are prop name and the values are prop values.
// Thus creating a mapping of "state" into "props".
function mapStateToProps(state){
  return{
    count:state.count
  }
}

class Counter extends React.Component{
  increment = () => {
  this.props.dispatch({ type: "INCREMENT" });
};

decrement = () => {
  this.props.dispatch({ type: "DECREMENT" });
};

reset=()=>{
  this.props.dispatch({type:"RESET"})
}

  render(){
    return(
      <div>
      <button onClick={this.decrement}>-</button>
      <span> {this.props.count} </span>
      <button onClick={this.increment}>+</button>
      <button onClick={this.reset}>RESET</button>
      
      </div>
    )
  }
}

export default connect(mapStateToProps)(Counter)