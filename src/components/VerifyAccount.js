import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { updateLoadingFailureToast, updateLoadingSucessToast } from "../hook/useToast";
import image from "../image/forgetpassword.png";
import verifyEmail from "./verifyEmail/verifyEmail";
function VerifyAccount() {
    const params = useParams();
    const toastId = useRef(null)
    const [email,setEmail] = useState(null);
    const navigate = useNavigate();
    const submit =async (e)=>{
        e.preventDefault();
        toastId.current = toast.loading("Please Wait...")
        // try {
        //    const res = await verifyEmail(email,params.token) ;
        //    showSucessToast(res)
        // } catch (error) {
        //     showFailureToast(error)
        // }
        verifyEmail(email,params.token)
            .then(res => {
                // showSucessToast(res);
                updateLoadingSucessToast(toastId,res);
                navigate("/signin")
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
            <h3>Verify Account</h3>
        
            <p style={{"text-align": "center"}}>Enter your same email to verify your account.</p>
            <br/>
            <input type="email" name="" class="box" placeholder="enter your email" id="" value={email} onChange = {(e)=>setEmail(e.target.value)}/>
            <input type="submit" value="Verify" class="btn"/>
        </form>
    </div>
     );
}

export default VerifyAccount;