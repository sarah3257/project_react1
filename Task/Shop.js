import { useState } from "react";

const Shop = () => {
    const[arrShop,setArrShop]=useState([{id:1,name:"גומיות כושר",price:20,purpose_of_fitness:"חיזוק  רגליים"},
    {id:2,name:"כדור כושר",price:25,purpose_of_fitness:"חיזוק ידיים "},{id:3,name:" משקולת",price:120,purpose_of_fitness:"חיזוק ידיים "},
    {id:1,name:" מזרן",price:80,purpose_of_fitness:"חיזוק רגליים"}]);
    const [buy,setBuy]=useState([]);

    return ( <>
    <h4> מוצרי כושר</h4>
    <p>סינון</p>
    <input type="button" defaultValue="מחיר קטן מ-30" onClick={() => setArrShop(arrShop.filter(i => i.price<= 30))}></input>
    <input type="button"defaultValue="למטרת חיזוק ידיים" onClick={()=>setArrShop(arrShop.filter(i=>i.purpose_of_fitness=="חיזוק ידיים "))}></input>
 <p></p>
  {arrShop.map (item=>{return <button><p>שם :{item.name} </p> <p>מחיר :{item.price}</p> מטרת הכושר :{item.purpose_of_fitness}</button>})}
    </> );
}
 
export default Shop;