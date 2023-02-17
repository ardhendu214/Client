import getUser from "../userRequests/getUser";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/button";
import DeleteBook from "../bookRequests/deleteBook";
import { getToken } from "../../hook/useLogin";
import AddToWishlist from "../bookRequests/addToWishlist";
import Contact from "../bookRequests/contact";

function OtherBookDetails({ book }) {
    const { title, author, bookDetails, bookCondition } = book;
    const navigate = useNavigate();
    const [donor, setDonor] = useState(null);

    useEffect(() => {
        const getDonor = async () => {
            setDonor(await getUser(book.donatedBy));
        };
        getDonor();
    }, [book.donatedBy]);

    let email = "Unavailable";
    let address = "Unknown";
    let id = "Unknown";
    // let phone = "Not Provided";

    if (donor) {
        email = donor.email;
        address = donor.address;
        id = donor._id;
        // phone = donor.phone;
    }

    const currentUser = getToken();

    return (
        <div class="bookdetails2">
            <form action="">
                <h1 style={{ "text-align": "center", color: "#d4911f" }}>
                    {title}
                </h1>
                <br />
                <h3 style={{ "text-align": "center", color: "#d4911f" }}>
                    {author}
                </h3>
                <br />
                <b>
                    <span class="bookdet" style={{ color: "#d4911f" }}>
                        Book Details :-
                    </span>
                </b>
                <div>{bookDetails}</div>
                <b>
                    <br />
                    <span class="bookdet" style={{ color: "#d4911f" }}>
                        Book Condition :-
                    </span>
                </b>
                <span>{bookCondition}</span>
                <b>
                    <br />
                    <br />
                    <span style={{ color: "#d4911f" }}>Email :-</span>
                </b>
                <span>{email}</span>
                <b>
                    <br />
                    <br />
                    <span style={{ color: "#d4911f" }}> Address :-</span>
                </b>
                <span>{address}</span>
                <br />
                <br />
                <br />
                <br />
                {currentUser && currentUser._id === id ? (
                    <Button
                        lable="Delete"
                        className="btn-danger"
                        onClick={() => {
                            DeleteBook(book);
                            navigate("/my-donated-books");
                        }}
                    />
                ) : (
                    <>
                        <Button
                            lable="Add To Wishlist"
                            className="btn-primary"
                            onClick={() => AddToWishlist(book)}
                        />

                        <Button
                            lable="Contact"
                            onClick={() => Contact(book)}
                            className="btn-primary"
                        />
                    </>
                )}
            </form>
            <br />
        </div>
    );
}

export default OtherBookDetails;
