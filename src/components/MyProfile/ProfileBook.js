import { NavLink } from "react-router-dom";
import getBookImg from "../bookRequests/getBookImg";
import Button from "../common/button";

const ProfileBook = ({ book, onDelete, pageLable }) => {
    return (
        <tr style={{ height: "20rem" }}>
            <td>
                <NavLink to={`/books/${book._id}`}>
                    <img
                        className="book_img"
                        src={getBookImg(book)}
                        alt={book.title}
                    />
                </NavLink>
            </td>
            <td
                style={{ width: "75%", textAlign: "left", paddingLeft: "9rem" }}
            >
                <div>
                    <strong>Title : </strong> <span>{book.title}</span>
                </div>

                <div>
                    <strong>Author : </strong> <span>{book.author}</span>
                </div>

                {pageLable !== "My Wishlist" ? (
                    <div>
                        <strong>Donated On : </strong>
                        <span>{new Date(book.donatedOn).toLocaleString()}</span>
                    </div>
                ) : null}
            </td>
            <td>
                <Button lable="Delete" onClick={() => onDelete(book)} />
            </td>
        </tr>
    );
};

export default ProfileBook;
