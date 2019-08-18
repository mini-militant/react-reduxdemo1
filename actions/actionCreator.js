import * as actionType from './actionTypes'

export const increment=()=>{
  return{
    type:actionType.INCREMENT
  }
}

export const decrement=()=>{
  return{
    type:actionType.DECREMENT
  }
}

export const reset=()=>{
  return{
    type:actionType.RESET
  }
}

export const saveResult=(result)=>{
 return{
    type:actionType.STORE_RESULT,
    result:result
  } 
}

export const storeResult=(result)=>{
  return (dispatch)=>{
    setTimeout(()=>{
        dispatch(saveResult(result))
    },2000)
  }
}
export const deleteResult=(id)=>{
  return{
    type:actionType.DELETE_RESULT,
    resultElId:id
  }
}