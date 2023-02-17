import axios from "axios";
import { useContext, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loginContext from "../context/loginContext";
import { authentication, setHeaderAtLocalStorage } from "../hook/useLogin";
import { updateLoadingFailureToast, updateLoadingSucessToast } from "../hook/useToast";
function LoginForm() {
    const [username, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const { setIsLogedin } = useContext(loginContext);
    const navigate = useNavigate();
    const toastId = useRef(null);

    const submitForm = async e => {
        toastId.current = toast.loading("Please Wait...")
        e.preventDefault();
        try {
            const data = {
                username,
                password,
            };
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/login`, data);
            if (res.data.token) {
                setHeaderAtLocalStorage(res.data.token);
                setIsLogedin(authentication());
                setTimeout(() => {
                    navigate("/");
                    window.location.reload(true);
                }, 1000);
            }
            // showSucessToast(res);
            updateLoadingSucessToast(toastId,res)
        } catch (error) {
            // showFailureToast(error);
            updateLoadingFailureToast(toastId,error)
        }
    };
    return (
        <div className="login-form-container">
            <form action="" onSubmit={submitForm}>
                <h3>Sign in</h3>
                <b>
                    <span>Username *</span>
                </b>
                <input
                    type="email"
                    name="username"
                    className="box"
                    placeholder="enter your email"
                    required
                    id=""
                    value={username}
                    onChange={e => setUserName(e.target.value)}
                />
                <b>
                    <span>Password *</span>
                </b>
                <input
                    type="password"
                    name="password"
                    className="box"
                    placeholder="enter your password"
                    id=""
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                {/* <div className="checkbox">
                    <input type="checkbox" name="" id="remember-me"/>
                    <label for="remember-me"> remember me</label>
                </div> */}
                <input type="submit" value="sign in" className="btn" />
                <p>
                    forget password ?{" "}
                    <NavLink to="/forget-pasword">click here</NavLink>
                </p>
                <p>
                    don't have an account ?{" "}
                    <NavLink to="/registration">click here</NavLink>
                </p>

                <p>
                    verify account ?{" "}
                    <NavLink to="/verify-account">click here</NavLink>
                </p>

            </form>
        </div>
    );
}

export default LoginForm;
