const initialState={
  results:[]
};

//it takes the current state and an action and returns NewState
const results=(state=initialState,action)=>{
  
  switch(action.type){
    case 'STORE_RESULT':
      return{
        ...state,
        results: state.results.concat({id:new Date(),value:action.result})
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

export default results;