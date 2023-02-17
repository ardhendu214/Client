import axios from "axios";
import { headers } from "../../hook/useLogin";
import { promiseToast } from "../../hook/useToast";

const DeleteReview = review => {
    promiseToast(handleDelete(review._id), "Successfully Deleted");
};

const handleDelete = async id => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/reviews/${id}`, headers());
};

export default DeleteReview;
