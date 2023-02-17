import { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import mainSubmitForm from "../hook/useForm";
import InputTypeSubmit from "./fromElement/InputTypeSubmit";
import InputTypeText from "./fromElement/InputTypeText";
import InputTypeTextarea from "./fromElement/InputTypeTextarea";
function Registration() {
    const [name,setName] = useState(null);
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [gender,setgender] = useState();
    const [phone,setPhone] = useState(null);
    const [address,setAddress] = useState(null);
    const navigate  = useNavigate();
    const toastId = useRef(null);
    const submitFrom =(e)=>{
        toastId.current = toast.loading("Please Wait...")
        e.preventDefault();
        try {
            const data = {
                gender,name,email,password,phone,address
            }
            mainSubmitForm(`${process.env.REACT_APP_API_URL}/users`,data,false,null,toastId)
            .then(({data})=>{
                navigate("/verify-account")
            })
        } catch (error) {
            
        }
    }
    return ( 
        <div className="login-form-container">
        <form action="" onSubmit={submitFrom}>
            <h3>Create an Account</h3>

            <InputTypeText inputName ="Name" type="text" placeholder="enter your name" required={true} id="" value = {name} setValue = {setName}/>

            <InputTypeText inputName ="Mobile Number" type="tel" placeholder="enter your number" required={false} id="" value = {phone} setValue = {setPhone}/>

            <InputTypeText inputName ="Email" type="email" placeholder="enter your email" required={true} id="" value = {email} setValue = {setEmail}/>
            
            <InputTypeTextarea inputName ="Address" placeholder="enter your address" required={true} id="" value = {address} setValue = {setAddress}/>

            <InputTypeText inputName ="password" type="password" placeholder="enter your password" required={true} id="" value = {password} setValue = {setPassword}/>
            
            <b><span>Gender *</span></b>
            <div onChange={(e)=>setgender(e.target.value)}>
                    <input type="radio" value="male" name="gender" /> <span style={{"display" : "inline","paddingRight":"8px"}}>Male</span>
                    <input type="radio" value="female" name="gender" /> <span style={{"display" : "inline","paddingRight":"8px"}}>Female</span>
                    <input type="radio" value="other" name="gender" /> <span style={{"display" : "inline","paddingRight":"8px"}}>Other</span>
            </div>
        
            <InputTypeSubmit value="Create"/>

            <p>have an account ? <NavLink to="/signin">sign in</NavLink></p>
        </form>
        
    </div>
     );
}

export default Registration;