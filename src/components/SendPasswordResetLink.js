import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updateLoadingFailureToast, updateLoadingSucessToast } from "../hook/useToast";
import image from "../image/forgetpassword.png";
import sendEmail from "./forgetPasswordRequest/sendEmail";
function SendPasswordResetLink() {
    const toastId = useRef(null);
    const [email,setEmail] = useState(null);
    const navigate = useNavigate();
    const submit =async (e)=>{
        e.preventDefault();
        toastId.current = toast.loading("Please Wait...")
        // try {
        //    const res = await sendEmail(email) ;
        //    showSucessToast(res)
        // } catch (error) {
        //     showFailureToast(error)
        // }
        sendEmail(email)
            .then(res=>{
                // showSucessToast(res) 
                updateLoadingSucessToast(toastId,res)
                navigate("/")
            })
            .catch(error => {
                // showFailureToast(error)
                updateLoadingFailureToast(toastId,error)
            })

    }
    return ( 
        <div class="login-form-container">
        <form action="" onSubmit={submit}>
            {/* <img src="/image/forgetpassword.png" alt="check internet connection" width="100px" style="margin: auto;
            display: block ;"/> */}
            <img src={image} alt="check internet connection" style={{"width":"100px","margin":"auto","display":"block"}}/>


            <br/>
            <h3>forget password</h3>
        
            <p style={{"text-align": "center"}}>Enter your email and we'll send you a verification link to reset your password.</p>
            <br/>
            <input type="email" name="" class="box" placeholder="enter your email" id="" value={email} onChange = {(e)=>setEmail(e.target.value)}/>
            <input type="submit" value="get verification link" class="btn"/>
        </form>
    </div>
     );
}

export default SendPasswordResetLink;