import axios from "axios";

const getReviews = async () => {
    const { data: reviews } = await axios.get(`${process.env.REACT_APP_API_URL}/reviews`);
    return reviews;
};

export default getReviews;
