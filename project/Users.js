import { useEffect , useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser, setAllUser } from './actions/UserAction'
import User from './User'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import {useNavigate}from 'react-router-dom'


const Users = () => {
  let nav=useNavigate()
    const dis = useDispatch()
    const allUser=useSelector(store=>store.users.allUser)
   const[arrUser,setArrUser]=useState(allUser)

    useEffect(() => {
        goToServer()
            }, [])
  
const goToServer=()=>{
    let url='https://dummyjson.com/users'
    fetch(url).then(response=>response.json())
    .then(data => {
        const usersArray = data.users;
        dis(setAllUser(usersArray))
      }).catch(err=>console.log(err))
    };

    const fun_gender = () => {
      setArrUser(allUser)
      console.log(arrUser)
      console.log(allUser)
      var genderSelect = document.getElementById("gender");
        setArrUser(allUser.filter((x) => x.gender === genderSelect.value));
      };
 const fun_age=()=>{
    setArrUser(arrUser.slice().sort((a, b) => a.age - b.age))

 }
 const fun_todo=()=>{
  const admin={

    name:"admin",
    password:"ad12min34"
}
  //const admin=allUser.filter(x=>x.password=="ad12min34"&&x.firstName=="Admin")[0]
  
  dis(setCurrentUser(admin))
  console.log(admin)       

  nav('/ListToDo')
 }
return (<> <h1>USERS</h1>
<br/>
<Button variant="outlined" href="#outlined-buttons"  onClick={fun_age}>  Sort by age </Button>

<select id="gender" onChange={fun_gender}>
  <option value="">All</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
</select>
<Button variant="outlined" href="#outlined-buttons"  onClick={fun_todo}>  all tasks </Button>

<br/><br/>
         
{arrUser&&arrUser.map(item => {
    return( <User user={item}></User>)
})}


</>);
}
 
export default Users;