import axios from "axios";

export default function sendEmail(email){
    return axios.post(`${process.env.REACT_APP_API_URL}/forget-password`,{email})
}