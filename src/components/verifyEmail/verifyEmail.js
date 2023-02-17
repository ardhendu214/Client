import axios from "axios";

export default function verifyEmail(email,token){
    return axios.post(`${process.env.REACT_APP_API_URL}/verify-account/${token}`,{email})
}
