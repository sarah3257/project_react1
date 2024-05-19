import * as actionType from '../actionType'


export function setOneTask(task) {
        return{
            type:actionType.SET_ONE_TASK,
            payload:task
        }
}
export function setAllTask(allTasks) {
    return{
        type:actionType.SET_ALL_TASK,
        payload:allTasks
    }
}
export function deleteTask(idTask) {
    return{
        type:actionType.DELETE_TASK,
        payload:idTask
    }
}
