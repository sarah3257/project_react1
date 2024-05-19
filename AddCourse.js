import React, { useState } from "react";
import DigitalCourses from './DigitalCourses';
 

export default function AddCourse(props){

    // <h2>{props.name} :שם הקורס</h2>
    // <p>{props.C.teacher} :שם המורה</p>
    // <p>{props.C.available_spaces} :מס' מקומות פנויים</p>
    // <p> {props.C.from_age} :מאיזה גיל</p>
    // <p>:זמנים</p>
    // <p> {props.C.times.map(x=>{return<p>סך שעות --{x.total_hours}  יום בשבוע --{x.day} תאריך התחלה--{x.startDate}תאריך סיום--{x.endDate}</p>})} </p>
    // <input type="button" defaultValue={props.value} onClick={()=>{props.fun(props.C)}}></input>
const [newCourse,setNewCourse]=useState({
    name:"",
    teacher:"",
    diploma:"",
    available_spaces:0,
    from_age:0,

})
const saveCourse=(e)=>{
let copyNewCourse={...newCourse}
let nameI=e.target.name
copyNewCourse[nameI]=e.target.value;
setNewCourse(copyNewCourse)

}
const finish=(e)=>{
    e.preventDefault()
    debugger;
props.add(newCourse)
}

    return (
        <><form onSubmit={finish}  >
            <div className="AddCourses1">
                <p id="titelAddCours">הוספת קורס למערכת</p>
            <div>
               <p>שם הקורס</p> <input type="text" onChange={saveCourse} name="name"></input>
            </div>

            <div>
               <p>שם המורה</p> <input type="text" onChange={saveCourse}  name="teacher"></input>
            </div>
            
            <div>
               <p>תעודה</p> <input type="text" onChange={saveCourse}  name="diploma"></input>
            </div>
            <div>
               <p>מס' מקומות פנויים</p> <input type="number"onChange={saveCourse} name="available_spaces" ></input>
            </div>

            <div>
               <p>מאיזה גיל</p> <input type="number"onChange={saveCourse}  name="from_age"></input>
            </div>
            <input type="submit"></input>
            </div>
        </form>
        </>
    )
}