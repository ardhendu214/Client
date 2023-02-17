import axios from "axios";
import { headers } from "./useLogin";
import { showFailureToast, showSucessToast, updateLoadingFailureToast, updateLoadingSucessToast } from "./useToast";

const header = headers();
export default async function mainSubmitForm(
    url,
    data,
    isHeaderNeeded,
    headers = header,
    toastId = null,
) {
    try {
        if (isHeaderNeeded) {
            // console.log(headers)
            const res = await axios.post(url, data, headers);
            if (res) {
                if(toastId){
                    updateLoadingSucessToast(toastId,res)
                }else showSucessToast(res);
            }
            return res;
        } else {
            const res = await axios.post(url, data);
            if (res) {
                if(toastId){
                    updateLoadingSucessToast(toastId,res)
                }else showSucessToast(res);
            }
            return res;
        }
    } catch (error) {
        if(toastId){
            updateLoadingFailureToast(toastId,error)
        }else showFailureToast(error);
    }
}
