import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/myDetails.css";
import loginContext from "../context/loginContext";
import { authentication, getToken, headers, removeHeaderFromLocalStorage } from "../hook/useLogin";
import { showFailureToast, showSucessToast } from "../hook/useToast";
import loginImage from "../image/login.png";
import InputTypeSubmit from "./fromElement/InputTypeSubmit";
import getProfilePic from "./userRequests/getProfilePic";
function Mydetails() {
    const { _id } = getToken();
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [address, setAddress] = useState(null);
    const [gender, setGender] = useState(null);
    const [profilePicSrc, setProfilePicSrc] = useState(loginImage);
    const { isLogedin, setIsLogedin } = useContext(loginContext);
    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const { data } = await axios.get(
                    `${process.env.REACT_APP_API_URL}/users/${_id}`,
                    headers()
                );
                // console.log(data);
                const { name, email, address, gender, profilePicSrc } = data;
                setName(name);
                setEmail(email);
                setAddress(address);
                setGender(gender);
                setProfilePicSrc(profilePicSrc);
            } catch (error) {
                showFailureToast(error);
            }
        };
        fetchDetails();
    }, [_id]);
    async function updateDetails(e) {
        e.preventDefault();
        const data = { name, email, gender, address };
        try {
            const res = await axios.put(
                `${process.env.REACT_APP_API_URL}/users/${_id}`,
                data,
                headers()
            );
            console.log(res);
            showSucessToast(res);
        } catch (error) {
            showFailureToast(error);
        }
    }
    function logout() {
        removeHeaderFromLocalStorage();
        setIsLogedin(authentication());
    }
    return (
        <div class="myacc">
            <div class="myacc1">
                <div class="abc">
                    <div class="abc_img">
                        <img
                            src={getProfilePic({ profilePicSrc })}
                            alt="check your internet"
                            width="80px"
                        />
                    </div>

                    <div class="abc_name">
                        <h4>hello,</h4>
                        <h2>{name}</h2>
                    </div>
                </div>
                <div class="abc1">
                    <ul style={{ "list-style": "none" }}>
                        <li>
                            <NavLink
                                to="/my-donated-books"
                                style={{ "font-size": "2.8rem" }}
                            >
                                Donated Books
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/my-wishlist" style={{ "font-size": "2.8rem" }}>
                                wishlist
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" style={{ "font-size": "2.8rem" }}  onClick={logout}>
                                sign out
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="myacc2">
                <form action="" onSubmit={updateDetails}>
                    <div>
                        <h2
                            style={{ "text-align": "center", color: "#d4911f" }}
                        >
                            Personal Information
                        </h2>
                    </div>
                    <div>
                        {" "}
                        <b>
                            <span style={{ color: "#694609" }}>Name </span>
                        </b>
                    </div>

                    <div>
                        <input
                            type="Name"
                            name=""
                            class="box1"
                            placeholder="name"
                            id=""
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>

                    {/* <div><b><span style={{"color":"#694609"}}>Mobile Number </span></b></div> */}
                    {/* <div> 
                    <input type="tel" name="" class="box1" placeholder="enter your number" pattern="[0-9]{0,10}"
                        id="" value={phone} onChange = {(e)=>setPhone(e.target.value)}/>
                </div> */}

                    <div>
                        <b>
                            <span style={{ color: "#694609" }}>Email </span>
                        </b>
                    </div>

                    <div>
                        <input
                            type="email"
                            name=""
                            class="box1"
                            placeholder="enter your email"
                            id=""
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <b>
                            <span style={{ color: "#694609" }}>Gender </span>
                        </b>
                    </div>

                    <div>
                        <input
                            type="radio"
                            value="male"
                            name="gender"
                            checked={gender === "male"}
                            onChange={e => setGender(e.target.value)}
                        />{" "}
                        <span
                            style={{ display: "inline", paddingRight: "8px" }}
                        >
                            Male
                        </span>
                        <input
                            type="radio"
                            value="female"
                            name="gender"
                            checked={gender === "female"}
                            onChange={e => setGender(e.target.value)}
                        />{" "}
                        <span
                            style={{ display: "inline", paddingRight: "8px" }}
                        >
                            Female
                        </span>
                        <input
                            type="radio"
                            value="other"
                            name="gender"
                            checked={gender === "other"}
                            onChange={e => setGender(e.target.value)}
                        />{" "}
                        <span
                            style={{ display: "inline", paddingRight: "8px" }}
                        >
                            Other
                        </span>
                    </div>

                    <div>
                        {" "}
                        <b>
                            <span style={{ color: "#694609" }}>Address </span>
                        </b>
                    </div>

                    <div>
                        <input
                            type="text"
                            name=""
                            class="box1"
                            placeholder="enter your address"
                            id=""
                            width="auto"
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                        />
                    </div>
                    <InputTypeSubmit value="Update" />
                </form>
            </div>
        </div>
    );
}

export default Mydetails;
