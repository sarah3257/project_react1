//import { BrowserRouter,Link,Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home';
import {useNavigate}from 'react-router-dom'

const LoginCourse = () => {


 let nameUser=""

    let nav=useNavigate()

    const cheack=()=>{
        const regex = /\d/;
         
    if(nameUser.length<2||regex.test(nameUser)){
        nav('/home')

    }
    else{
    nav('/listCourse')

    }
}

    return ( <><div>
   <p>שם משתמש</p>
   <input type="text" onChange={(e)=>nameUser=e.target.value}></input>
    
   <input type="submit" onClick={cheack} value="הכנס"></input>
    </div></> );
}
 
export default LoginCourse;