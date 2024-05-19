import { useReducer } from "react"
import * as actionType from '../actionType';

const initialState={
    currentUser: null,
    allUser: []
    }
    export default  function UserReducer(state=initialState,action){
        switch(action.type){
            case actionType.SET_ALL_USER:
                return{
                    ...state,
                    allUser:action.payload
                }
                

            case actionType.SET_CURRENTUSER: 
 
                return{
                    ...state,
                currentUser:action.payload
                }
            }
            return state;

        }
 