import axios from "axios";
import { authentication, getToken } from "../../hook/useLogin";
import { promiseToast } from "../../hook/useToast";
import getUser from "../userRequests/getUser";

const AddToWishlist = book => {
    promiseToast(handleUpdateWishlist(book), "Added to Wishlist");
};

const handleUpdateWishlist = async book => {
    if (!authentication()) return Promise.reject("You Need To Login First!");
    const user = await getUser(getToken()._id);
    if (book.donatedBy === user._id)
        return Promise.reject("You Can't Add Your Own Book to Wishlist!");
    await axios.put(`${process.env.REACT_APP_API_URL}/wishlists/${user.wishlist}`, {
        book: book._id,
    });
};

export default AddToWishlist;
