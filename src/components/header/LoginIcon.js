// import * as React from 'react';
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../../assets/css/iconDropdown.css";
import loginContext from "../../context/loginContext";
import {
    authentication,
    removeHeaderFromLocalStorage,
} from "../../hook/useLogin";
function LoginIcon() {
    const { isLogedin, setIsLogedin } = useContext(loginContext);
    function logout() {
        removeHeaderFromLocalStorage();
        setIsLogedin(authentication());
    }
    if (isLogedin) {
        return (
            <div className="dropdown">
                <div className="icons">
                    {/* <NavLink to="/signin"> */}
                    <div id="login-btn" className="fas fa-user"></div>
                    {/* </NavLink> */}
                </div>
                <div className="dropdown-content">
                    <NavLink to="/myprofile">My Profile</NavLink>
                    <NavLink to="/my-donated-books">Donated Books</NavLink>
                    <NavLink to="/my-wishlist">wishlist</NavLink>
                    <NavLink to="/" onClick={logout}>
                        sign out
                    </NavLink>
                </div>
            </div>
        );
    } else {
        return (
            <div className="icons">
                <NavLink to="/signin">
                    <div id="login-btn" className="fas fa-user"></div>
                </NavLink>
            </div>
        );
    }
}

export default LoginIcon;
