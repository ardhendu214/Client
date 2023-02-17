import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AddToWishlist from "../bookRequests/addToWishlist";
import Contact from "../bookRequests/contact";
import getBookImg from "../bookRequests/getBookImg";
import getBookPageLink from "../bookRequests/getBookPageLink";
import Button from "../common/button";
import getUser from "../userRequests/getUser";

function Book({ book }) {
    const [donor, setDonor] = useState(null);
    useEffect(() => {
        const getDonor = async () => {
            setDonor(await getUser(book.donatedBy));
        };
        getDonor();
    }, [book.donatedBy]);

    return (
        <div className="swiper-slide box">
            <div className="icons">
                <NavLink
                    to=""
                    onClick={() => AddToWishlist(book)}
                    className="fas fa-heart"
                />
            </div>
            <div className="image">
                <NavLink to={getBookPageLink(book)}>
                    <img src={getBookImg(book)} alt="" />
                </NavLink>
            </div>
            <div className="content">
                <h3>{book.title}</h3>
                {/* <div className="price">
                    $0 <span>$20.99</span>
                </div> */}
                <Button lable="Contact" onClick={() => Contact(book)} />
            </div>
        </div>
    );
}

export default Book;
