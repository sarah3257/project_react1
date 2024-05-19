import { useForm } from "react-hook-form"
import {useNavigate}from 'react-router-dom'

const Form = () => {
    const {register,handleSubmit,formState:{errors}}=useForm({mode:"onBlur"})
    let nav=useNavigate()

    const save=(data)=>{
        console.log(data)
    }
    const finish=()=>{
        nav('/Home_form')
    }
    return ( <><form onSubmit={handleSubmit(save)}>
        <h1>Hello dear customer</h1>
        <p>name</p><input type="text" {...register("name",{required:"Name field is required"})}></input>
        {errors.name&&<p>{errors.name.message}</p>}
        <p>address</p><input type="text" {...register("address")}></input>
        <p>email</p><input type="text" {...register("email")}></input>
        <p>password</p><input type="text" {...register("password")}></input>
        <br/><input type="submit" onClick={finish}></input>
    </form>
    </> );
}

 
export default Form;