import getBookImg from "../bookRequests/getBookImg";
import getBookPageLink from "../bookRequests/getBookPageLink";
import { NavLink } from "react-router-dom";

const Book = ({ book }) => {
    return (
        <NavLink to={getBookPageLink(book)} className="swiper-slide">
            <img src={getBookImg(book)} alt="book" />
        </NavLink>
    );
};

export default Book;
