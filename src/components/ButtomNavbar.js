import { NavLink } from "react-router-dom";
/* eslint-disable jsx-a11y/anchor-has-content */
function ButtomNavbar() {
    return (
        <nav class="bottom-navbar">
            <NavLink to="/" className="fa fa-home"></NavLink>
            <NavLink to="/books" className="fas fa-list"></NavLink>
            <NavLink
                to="/bookdonationform"
                className="fa fa-handshake-o"
            ></NavLink>
            <NavLink to="/reviews" className="fas fa-comments"></NavLink>
            <NavLink to="/myprofile" className="fa fa-user"></NavLink>
        </nav>
    );
}

export default ButtomNavbar;
