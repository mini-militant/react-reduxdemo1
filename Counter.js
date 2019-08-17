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

 

  render(){
    return(
      <div>
      <button onClick={this.props.onDecrement}>-</button>
      <span> {this.props.count} </span>
      <button onClick={this.props.onIncrement}>+</button>
      <button onClick={this.props.onReset}>RESET</button>
      
      </div>
    )
  }
}
{/*
    Connect function actually injects "dispatch" function as a prop.
    So we just need to call the "dispatch" function
*/} 

const mapDispatchToProps = dispatch =>{
  return{
    onIncrement : ()=>dispatch({type:'INCREMENT'}),
    onDecrement : ()=>dispatch({type:'DECREMENT'}),
    onReset: ()=>dispatch({type:'RESET'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)