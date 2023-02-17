import axios from "axios";

export default function resetPassword(password,confirmPassword,token){
    return axios.post(`${process.env.REACT_APP_API_URL}/forget-password/reset/${token}`,{password,confirmPassword})
}
