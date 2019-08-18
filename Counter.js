import React from 'react'
import {connect} from 'react-redux'
import * as actionType from './actions/actionTypes'
import * as actionCreator from './actions/actionCreator'


// Takes entire redux state and is expected to return an object where the
// keys are prop name and the values are prop values.
// Thus creating a mapping of "state" into "props".


class Counter extends React.Component{
  render(){
    return(
      <div>
      <button onClick={this.props.onDecrement}>-</button>
      <span> {this.props.count} </span>
      <button onClick={this.props.onIncrement}>+</button>
      <br/>
      <button onClick={this.props.onReset}>RESET</button>
      <hr/>
      <button onClick={()=>this.props.onStoreResult(this.props.count)}>Store Result</button>
      <ul>
        {
          this.props.storedResults.map(strResult=>(
            <li key={strResult.id} onClick={()=>this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
          ))
        }        
      </ul>
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
    onIncrement : ()=>dispatch(actionCreator.increment()),
    onDecrement : ()=>dispatch(actionCreator.decrement()),
    onReset: ()=>dispatch(actionCreator.reset()),
    onStoreResult : (result)=>dispatch(actionCreator.storeResult(result)),
    onDeleteResult : (id)=>dispatch(actionCreator.deleteResult(id))
  }
}
const  mapStateToProps=(state)=>{
  
  return{
    count:state.ctr.count,
    storedResults:state.strResults.results
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)