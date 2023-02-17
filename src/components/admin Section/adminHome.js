import { NavLink } from "react-router-dom";
import "../../assets/css/admin_home.css";
import bookImg from "../../image/book.png";
import userImg from "../../image/user.png";
import reviewImg from "../../image/review.png";

const AdminHome = () => {
    return (
        <div className="admin_section">
            <ul>
                <li>
                    <div className="admin_section_under">
                        <div>
                            <img src={bookImg} alt="" width="70px" />
                        </div>
                        <div>
                            <NavLink to="/admin-section-allbooks">
                                {" "}
                                All Books
                            </NavLink>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="admin_section_under">
                        <div>
                            <img src={userImg} alt="" width="70px" />
                        </div>
                        <div>
                            <NavLink to="/admin-section-allusers">
                                {" "}
                                All Users
                            </NavLink>
                        </div>
                    </div>
                </li>
                {/* <li>
                    <div className="admin_section_under">
                        <div>
                            <img src={reviewImg} alt="" width="60px" />
                        </div>
                        <div>
                            <NavLink to="/admin-section-allreviews">
                                {" "}
                                All Reviews
                            </NavLink>
                        </div>
                    </div>
                </li> */}
            </ul>
        </div>
    );
};

export default AdminHome;
