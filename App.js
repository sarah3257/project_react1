 import logo from './logo.svg';
 import './App.css';
import DigitalCourses from './DigitalCourses';
import Course from './Course';
import { BrowserRouter,Link,Route, Routes } from 'react-router-dom';
import Home from './Home';
import LoginCourse from './LoginCourse';
import DetailsCourse from './DetailsCourse';
import ListCourse from './ListCourse';
import Gym from './Task/Gym';
import Shop from './Task/Shop';
import Login from './project/Login';
import ListToDo from './project/ListToDo';
import Users from './project/Users';
 import Form from './lesson10/Form'
 import Home_form from './lesson10/Home_form'

function App() {

  return (
  <>

    {/* פרויקט */}

    
<BrowserRouter>
<Routes>
<Route path="ListToDo" element={<ListToDo/>}></Route>
<Route path="" element={<Login/>}></Route>
<Route path="Users" element={<Users/>}></Route></Routes>
  </BrowserRouter>  
  
  {/* שיעור מס 10 */}
{/* <BrowserRouter>
<Routes>
<Route path="Home_form" element={<Home_form/>}></Route>
<Route path="" element={<Form/>}></Route>
</Routes>
  </BrowserRouter>  */}


  {/* משימה א */}
  {/* <Gym></Gym> */}
  {/* משימה ב */}
  {/* <Shop></Shop>}
  {/* שיעור מספר 5 */}
 {/* <BrowserRouter><nav>
 <p><Link to="home">דף הבית</Link></p>
 <p><Link to="login">התחברות</Link></p>
 </nav>
 

   <Routes>
     <Route path="home" element={<Home/>}></Route>
     <Route path="login" element={<LoginCourse/>}></Route>
     <Route path="listCourse" element={<ListCourse/>}>
     <Route path="digitalCourses" element={<DigitalCourses/>}></Route>

     <Route path="detailsCourse/:id" element={<DetailsCourse/>}></Route>
     </Route>

   </Routes>
 </BrowserRouter> */}

  {/* <DigitalCourses></DigitalCourses> */}


   </>  

  );
}

export default App;
