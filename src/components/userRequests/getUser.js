import axios from "axios";

const getUser = async id => {
    const { data: user } = await axios.get(`${process.env.REACT_APP_API_URL}/users/` + id);
    return user;
};

export default getUser;
