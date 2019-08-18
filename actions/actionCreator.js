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
export const storeResult=(result)=>{
  return{
    type:actionType.STORE_RESULT,
    result:result
  }
}
export const deleteResult=(id)=>{
  return{
    type:actionType.DELETE_RESULT,
    resultElId:id
  }
}