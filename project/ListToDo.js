import { useEffect , useState} from 'react'
import axios from "axios"
import { Await } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAllTask } from './actions/ToDoAction'
import ToDo from './ToDo'
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

const ListToDo = () => {
    const dis = useDispatch()
    let arrTasks=useSelector(store=>store.toDo.allTasks)
    const oneUser=useSelector(store=>store.users.currentUser)   
    // const[i,setI]=useState()

console.log(oneUser)
    useEffect(() => {
        goToServer()
            }, [])

 const goToServer=()=>{
       let url='https://dummyjson.com/todo'
       fetch(url).then(response=>response.json())
       .then(data => {
       const tasksArray = data.todos;
       console.log(tasksArray)
       dis(setAllTask(tasksArray))}).catch(err=>console.log(err))
 };

const fun_delete=(id)=>{
    dis(setAllTask(arrTasks.filter(x=>x.id!=id)))}

const  fun_Completion=(i)=>{
    i.completed=!i.completed
    let copy11=arrTasks.map(x=>x.id!==i.id?x:i)
    
    dis(setAllTask(copy11))
}




    return (<><h1>List To Do</h1>{ console.log(arrTasks)} 
    {arrTasks&&arrTasks.map(item => {
            return ( oneUser.password=="ad12min34"||oneUser.id==item.userId)&&<div  > &&<p key={item.id}><ToDo toDo={item}></ToDo></p> 
                <p className='textTodo'>{item.completed?   'הביצוע נוסף בהצלחה':'בבקשה לבצע משימה'}</p>
                <IconButton aria-label="delete" size="small" onClick={() => fun_delete(item.id)}>
                <DeleteIcon fontSize="inherit" />
                </IconButton>
                <Button variant="outlined" href="#outlined-buttons" onClick={() =>fun_Completion(item)}>
                {item.completed? 'ביטול הביצוע' : 'ביצעתי בהצלחה'}</Button>
   
             
                {/* (user.firstName=="admin"|| item.userId==user.id)&&<p key={item.id}> <ToDo task={item}></ToDo></p> */}
                
             {/* <label>?האם משימה {item.id } בוצעה </label></p> */}


                   </div>
        })}
        {/* {arrUser&&arrUser.map(item => {
    return( <User user={item}></User>)
})} */}
 {/* {arrTasks&&arrTasks.map(item=>{return ()&& <ToDo toDo={item}></ToDo>
  })}    */}
       </>);
    }
export default ListToDo;