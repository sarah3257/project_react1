import * as actionType from '../actionType'

export function setAllUser(allUser) {
    return{
        type: actionType.SET_ALL_USER, 
        payload: allUser
        }
}
export function setCurrentUser(user) {
    return{ 
        type:actionType.SET_CURRENTUSER, 
        payload: user
    }
}

 