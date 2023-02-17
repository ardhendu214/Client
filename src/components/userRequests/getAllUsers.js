import axios from "axios";

const getAllUsers = () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/users`);
};

export default getAllUsers;
