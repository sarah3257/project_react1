import {useNavigate}from 'react-router-dom'
import { useEffect , useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser, setAllUser } from './actions/UserAction'
const Login  = () => {
  let nav=useNavigate()
    const user={

        name:"",
        password:""
    }
   const allUser=useSelector(store=>store.users.allUser)
   // let oneUser=useSelector(store=>store.users.currentUser)
    const dis=useDispatch()
    
    useEffect(()=>{goToServer()},[])        
    const goToServer=()=>{
    let url='https://dummyjson.com/users'
    fetch(url).then(response=>response.json())
    .then(data => {
        const usersArray = data.users;
        dis(setAllUser(usersArray))
      }).catch(err=>console.log(err))
    };

    const check=()=>{
        if(user.name=="admin"&&user.password=="ad12min34"){
          nav('/Users')
        }
          else{
            const user2=allUser.filter(x=>x.password==user.password&&x.firstName==user.name)[0]
            dis(setCurrentUser(user2))
            console.log(user2)       
            nav('/ListToDo')

            }
       
                             
        }
        
   return  ( <>
  

    <input type="text" onChange={(e)=>user.name=e.target.value}></input>
      <label>סיסמא</label><input type="password" onChange={(e)=>user.password=e.target.value}></input>
     <label>שם</label> <input type="submit" onClick={check} className='btnE' value="הכנס"></input>
    </> );
}
 
export default Login ;