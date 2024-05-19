import react, { useState } from 'react'
import {useParams} from "react-router-dom";

const DetailsCourse = () => {
    const [arrCourses,setArrCourses]=useState([{id:1,name:"JAVA",teacher:"Hadas Cohen",price:50 ,diploma:"Kama Tech",available_spaces:17,from_age:20,times:30}
    ,{id:2 ,name:"SQL",teacher:"Ruth Chen ",price:30 ,diploma:"Gov",available_spaces:10,from_age:20,times:40}
    ,{id:3 ,name:"NET CORE",teacher:"Gil Alon ",price:25 ,diploma:"מכון לב",available_spaces:5,from_age:21,times:50}
    ,{id:4,name:"C++",teacher:"Riff Stern ",price:100 ,diploma:"Kama Tech",available_spaces:12,from_age:18,times:20}
    ,{id:5,name:"react",teacher:"Nava Livni ",price:200 ,diploma:"Kama Tech",available_spaces:9,from_age:16,times:25}
     ])
let x =useParams();
let y=x.id;

let index=arrCourses.findIndex(item=>item.id==y)

let copyObj=arrCourses[index]


let total_hours=copyObj.times.total_hours;
    return ( <>
   
    <p>{copyObj.name}------שם</p>
   <p>{copyObj.teacher}--מורה</p> 
   <p>{copyObj.price}----מחיר</p>
   <p>{copyObj.diploma}-----דיפלומה</p>   
   <p>{copyObj.available_spaces}-------מקום </p>
   <p>{copyObj.from_age}------מגיל</p>
   <p>{copyObj.times}------שעות</p>

   
    </> );
}
 
export default DetailsCourse;