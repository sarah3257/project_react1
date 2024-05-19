import { Link, Outlet } from 'react-router-dom';
import DigitalCourses from './DigitalCourses';
import DetailsCourse from './DetailsCourse';

const ListCourse = () => {

    return ( <>


<p><button id="btmList"> <Link to="digitalCourses">לרשימה הגדולה</Link></button></p>
<Outlet></Outlet>
 <button><Link to="detailsCourse/1">JAVA</Link></button>
 <button><Link to="detailsCourse/2">SQL</Link></button>
 <button><Link to="detailsCourse/3">NET CORE</Link></button>
 <button><Link to="detailsCourse/4">C++</Link></button>
 <button><Link to="detailsCourse/5">react</Link></button>


 

 
    </> );
}
 
export default ListCourse;