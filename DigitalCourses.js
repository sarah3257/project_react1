import react, { useState } from 'react'
import './DigitalCourses.css'
import Course from './Course'
import AddCourse from './AddCourse';

export default function DigitalCourses(){

   const [arrCourses,setArrCourses]=useState([{id:1,name:"JAVA",teacher:"Hadas Cohen",price:50 ,diploma:"Kama Tech",available_spaces:17,from_age:20,times:30}
    ,{id:2 ,name:"SQL",teacher:"Ruth Chen ",price:30 ,diploma:"Gov",available_spaces:10,from_age:20,times:40}
    ,{id:3 ,name:"NET CORE",teacher:"Gil Alon ",price:25 ,diploma:"מכון לב",available_spaces:5,from_age:21,times:50}
    ,{id:4,name:"C++",teacher:"Riff Stern ",price:100 ,diploma:"Kama Tech",available_spaces:12,from_age:18,times:20}
    ,{id:5,name:"react",teacher:"Nava Livni ",price:200 ,diploma:"Kama Tech",available_spaces:9,from_age:16,times:25}
     ])
 
 const [buy,setBuy]=useState([])
 const [sum,setsum]=useState(0);


 const buyCourse=(C)=>{
   if (C.available_spaces==0)
  { alert("מצטערים , ההרשמה לקורס זה הסתיימה")
   return;}
   let copyC={...C}
   copyC.available_spaces--
   let index=arrCourses.findIndex(i=>i.id==C.id)
   let copyCourses=[...arrCourses]
   copyCourses.splice(index,1,copyC)
   setArrCourses(copyCourses)
    setBuy([...buy,C])
    let s=sum+C.price
    setsum(s)

 }
 
 const removal=(C)=>{
    let index =buy.findIndex(item=>item.id==C.id)
    let index2=arrCourses.findIndex(item=>item.id==C.id)
    let copyObj=arrCourses[index2]
    copyObj.available_spaces++
    let copyCoursBuy=[...arrCourses]
    copyCoursBuy.splice(index2,1,copyObj)
    setArrCourses(copyCoursBuy)
    let copy=[...buy]
    copy.splice(index,1)
    setBuy(copy)

}
const add1=(newCourse)=>{
setArrCourses([...arrCourses,newCourse])
}
const[flag,setFlag]=useState(true)
const filtering=(e)=>{
   setFlag(!flag)
   
}


const [num, setNum] = useState(0);
 
   const InputChange = (event) => {
     const value = event.target.value;
     setNum(value);
   };

const[btSum,setBtSum]=useState(false);
const sumFun=()=>{
   setBtSum(!btSum)
}

return(<> 
 {/* <AddCourse add={add1}></AddCourse> */}
<h1>Digital Courses</h1>
<input type="button" defaultValue={btSum?"להסתרת הסכום":"לצפיה בסכום"}  onClick={sumFun}></input>
{btSum&&(<h3>{sum}  :הסכום שלך</h3>)}
{!flag?arrCourses.filter(item=>item.times>num).map (item=>{return <Course C={item} fun ={buyCourse}value="הוספת קורס"></Course>
}):arrCourses.map (item=>{return <Course C={item} fun ={buyCourse}value="הוספת קורס"></Course>
})}

 {buy&&buy.map(item=>{return <Course C={item}fun ={removal} value="הסרת קורס "></Course>})}
 {buy.length==5&&alert("תלמיד יקר אתה מקבל קורס חינם , כי נרשמת ליותר מחמישה קורסים")}
{/* שיעור 6 */}
<p>סינונים</p>
 <input type="button" defaultValue="מחיר קטן מ-30" onClick={() => setArrCourses(arrCourses.filter(i => i.price<= 30))}></input>
    <input type="button"defaultValue="  מכון לב" onClick={()=>setArrCourses(arrCourses.filter(i=>i.diploma=="מכון לב"))}></input>
 <p></p>
<input type="number" id="btmnum" value={num} onChange={InputChange} ></input>מספר שעות
<input type="button" id="btmFiltering" defaultValue={flag?" עם סינון של שעות":"בלי סינון שעות"} onClick={filtering}name="" ></input>



</>
 )
}
