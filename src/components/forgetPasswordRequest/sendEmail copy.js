import axios from "axios";

export default function resetPassword(password,confirmPassword){
    return axios.post(`${process.env.REACT_APP_API_URL}/forget-password`,{password,confirmPassword})
}