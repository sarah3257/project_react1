import * as actionType from '../actionType';
const initialState={
    allTasks:[]
}
export default  function ToDoReducer(state=initialState,action){
    switch(action.type){
        case actionType.DELETE_TASK:
            let copy2 = state.allTasks.filter(i=>i.id!= action.payload)
            return{
                ...state,
                allTasks:copy2
            }
        case actionType.SET_ALL_TASK:
            return{
                ...state,
                allTasks:action.payload            }

        case actionType.SET_ONE_TASK:
            let copy =state.allTasks.map(x=>{return(x.id==action.payload.id?action.payload:x)})
            return{
                ...state,
                allTasks:copy
            }

    }
    return state;
    }
   
