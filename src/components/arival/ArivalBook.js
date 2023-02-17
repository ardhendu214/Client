import { NavLink } from "react-router-dom";
import { ArivalContent } from "../../assets/css/Element.style";
import getBookImg from "../bookRequests/getBookImg";
import getBookPageLink from "../bookRequests/getBookPageLink";
function ArivalBook({ book }) {
    return (
        <NavLink to={getBookPageLink(book)} className="swiper-slide box">
            <div className="image">
                <NavLink to={getBookPageLink(book)}>
                    <img src={getBookImg(book)} alt="" />
                </NavLink>
            </div>
            
            <ArivalContent>
                <h3>{book.title}</h3>
                <div>
                    <span>{book.author}</span>
                </div>
            </ArivalContent>
        </NavLink>
    );
}

export default ArivalBook;
