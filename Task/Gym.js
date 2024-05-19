import { useState } from "react";
const Gym = () => {
   


    const[user ,setUser]=useState({
        name: "",
         mail: "", 
         kindSubscription: ""
        }
    );
    const[isRegistered   ,setIsRegistered ]=useState(false);//רשום
    const[isSubscription   ,setIsSubscription  ]=useState(false);//מנוי
    const [isChecked, setIsChecked] = useState(false);

    let item2={...user}

    const funFull=(e)=>{
      let item={...user}
      let nameI=  e.target.name;
      item[nameI]=e.target.value;
      setUser(item)
   
    };

    const funRegistered=()=>{
        setIsRegistered(true);
    }
    const funSubscription =(e)=>{
        setIsSubscription (true);
        let item={...user}       
        item.kindSubscription=e.target.defaultValue;
        setUser(item)
    }

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        if (!isChecked) {
          alert('נרשמת בהצלה לפרסומות שלנו');
        }
      };


    return ( <>
    <h1 id={isRegistered?"Reg":"notReg"}>חדר כושר</h1>
<h2>Apex Fitness </h2>
<p></p>
    {!isRegistered && (<div>
<h3> הצטרפו אלינו למסע כושר טרנספורמטיבי שאין כמותו</h3>
<h3> זה לא רק חדר כושר; זה אורח חיים</h3>
<p><input type="text" onChange={funFull} name="name" ></input>שם</p>
<p><input type="text" onChange={funFull} name="mail" ></input>מייל</p>
<p><input type="button" defaultValue="להרשמה" onClick={funRegistered}></input></p>
</div>)
}

{isRegistered && (<div id={isSubscription?"subDiv":"RegDiv"}>
{/* //משתמש רשום */}
<h4>{user.mail} המייל שלך הוא  {user.name}   שלום ל</h4>

<input id="btm" type="button" defaultValue="מנוי שנתי "  onClick={funSubscription} ></input>
<input id="btm" type="button" defaultValue="מנוי חצי שנתי "  onClick={funSubscription}></input>
<input id="btm" type="button" defaultValue="רכישת מנוי של 10 ביקורים " onClick={funSubscription}></input>
<h4><input type="checkbox" checked="" onClick={handleCheckboxChange}></input>האם ברצונך לקבל פרסומות מאיתנו</h4>
{isSubscription&&(<h2 >כייף שאתה איתנו בכושר עם    {user.kindSubscription}  {user.name}</h2>)}
</div>)
}

</> );



}
 
export default Gym;
