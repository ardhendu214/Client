import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import mainSubmitForm from "../hook/useForm";
import { headers } from "../hook/useLogin";
import donatebookLogo from "../image/donatebook.png";
import getBookPageLink from "./bookRequests/getBookPageLink";
import InputTypeFile from "./fromElement/InputTypeFile";
import InputTypeSelect from "./fromElement/InputTypeSelect";
import InputTypeSubmit from "./fromElement/InputTypeSubmit";
import InputTypeText from "./fromElement/InputTypeText";
function BookDonationForm() {
    const [bookName, setBookName] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [bookDetails, setBookDetails] = useState("");
    const [bookCondition, setBookCondition] = useState("");
    const [publishYear, setPublishYear] = useState(null);
    const [bookImg, setBookImg] = useState(null);
    const navigate = useNavigate();
    const toastId = useRef(null);
    const submitForm = e => {
        toastId.current = toast.loading("Please Wait...")
        e.preventDefault();
        const header = headers();
        header["Content-Type"] = "multipart/form-data";

        const formData = new FormData();
        formData.append("title", bookName);
        formData.append("author", authorName);
        formData.append("publishYear", publishYear);
        formData.append("bookCondition", bookCondition);
        formData.append("bookDetails", bookDetails);
        formData.append("file", bookImg);

        mainSubmitForm(
            `${process.env.REACT_APP_API_URL}/books`,
            formData,
            true,
            header,toastId
        ).then(({ data }) => {
            navigate(getBookPageLink(data));
        });
    };

    return (
        <div className="login-form-container">
            <form action="" onSubmit={submitForm}>
                <img
                    src={donatebookLogo}
                    alt="Check your internet"
                    width="100px"
                    style={{ display: "block", margin: "auto" }}
                />
                <h3>Donate Books</h3>
                <br />

                <InputTypeText
                    inputName="Book Name"
                    type="text"
                    placeholder="Enter Book name"
                    required={true}
                    id=""
                    value={bookName}
                    setValue={setBookName}
                />

                <InputTypeText
                    inputName="Author Name"
                    type="text"
                    placeholder="Enter author name"
                    required={true}
                    id=""
                    value={authorName}
                    setValue={setAuthorName}
                />

                <InputTypeText
                    inputName="Book Details"
                    type="text"
                    placeholder="Enter book details"
                    required={true}
                    id=""
                    value={bookDetails}
                    setValue={setBookDetails}
                />

                <InputTypeText
                    inputName="Publish Year"
                    type="text"
                    placeholder="Publish year"
                    required={true}
                    id=""
                    value={publishYear}
                    setValue={setPublishYear}
                />

                <InputTypeSelect
                    value={bookCondition}
                    setValue={setBookCondition}
                />

                <InputTypeFile setBookImg={setBookImg} />

                {/* <PreviewImage file = {URL.createObjectURL(bookImg)}/> */}
                <InputTypeSubmit value="Donate" />
            </form>
        </div>
    );
}

export default BookDonationForm;
