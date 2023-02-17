import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import loginContext from "../../context/loginContext";
import { authentication, getToken, removeHeaderFromLocalStorage } from "../../hook/useLogin";
import getProfilePic from "../userRequests/getProfilePic";
import getUser from "../userRequests/getUser";
const AdminNavigationPannel = () => {
    const [user, setUser] = useState(null);
    const { isLogedin, setIsLogedin } = useContext(loginContext);
    useEffect(() => {
        const fetchUser = async () => {
            setUser(await getUser(getToken()._id));
        };
        fetchUser();
    }, []);

    function logout() {
        removeHeaderFromLocalStorage();
        setIsLogedin(authentication());
    }

    if (user)
        return (
            <div>
                <div className="abc">
                    <div className="abc_img">
                        <img
                            src={getProfilePic(user)}
                            alt="check your internet"
                            width="80px"
                        />
                    </div>

                    <div className="abc_name">
                        <h4>hello,</h4>
                        <h2>{user.name}</h2>
                        <h4>(Admin)</h4>
                    </div>
                </div>
                <div className="abc1">
                    <ul style={{ listStyle: "none" }}>
                        <li>
                            <NavLink
                                to="/admin-section-allbooks"
                                style={{ fontSize: "2.8rem" }}
                            >
                                All Books
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/admin-section-allusers"
                                style={{ fontSize: "2.8rem" }}
                            >
                                All Users
                            </NavLink>
                        </li>
                        {/* <li>
                            <NavLink
                                to="/admin-section-allreviews"
                                style={{ fontSize: "2.8rem" }}
                            >
                                All Reviews
                            </NavLink>
                        </li> */}
                        <li>
                            <NavLink to="/" style={{ fontSize: "2.8rem" }} onClick={logout}>
                                sign out
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        );
};

export default AdminNavigationPannel;
