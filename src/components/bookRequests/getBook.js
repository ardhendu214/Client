import axios from "axios";

const getBook = id => {
    return axios.get(`${process.env.REACT_APP_API_URL}/books/` + id);
};

export default getBook;
