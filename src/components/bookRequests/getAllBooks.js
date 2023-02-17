import axios from "axios";

const getAllBooks = () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/books`);
};

export default getAllBooks;
