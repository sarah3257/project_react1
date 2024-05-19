import react from 'react'
import DigitalCourses from './DigitalCourses'


export default function Course(props){


    return(
        <div className="singleCourse">

            <h2>{props.C.name} :שם הקורס</h2>
            <p>{props.C.teacher} :שם המורה</p>
            <p>{props.C.diploma}:תעודת</p>
            <p>{props.C.available_spaces} :מס' מקומות פנויים</p>
            <p> {props.C.from_age} :מאיזה גיל</p>
            <p>{props.C.times}: מס' שעות</p>
            {/* <p> {props.C.times?.map(x=>{return<p>סך שעות --{x.total_hours}  יום בשבוע --{x.day} תאריך התחלה--{x.startDate}תאריך סיום--{x.endDate}</p>})} </p> */}
            <input type="button" defaultValue={props.value} onClick={()=>{props.fun(props.C)}}></input>



        </div>
    )
}