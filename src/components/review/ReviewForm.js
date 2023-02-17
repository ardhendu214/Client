import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import mainSubmitForm from "../../hook/useForm";
import { headers } from "../../hook/useLogin";
function ReviewForm() {
    const toastId = useRef();
    const [rating, setRating] = useState(1);
    const [content, setContent] = useState(null);

    const navigate = useNavigate();

    const reviewSubmit = e => {
        toastId.current = toast.loading("Please Wait...")
        e.preventDefault();
        const data = {
            rating,
            content,
        };
         mainSubmitForm(`${process.env.REACT_APP_API_URL}/reviews`, data, true,headers(),toastId);
    };
    return (
        <div class="login-form-container active">
            <form
                action=""
                onSubmit={e => {
                    reviewSubmit(e);
                    navigate("/reviews");
                }}
            >
                <h3 style={{ color: "#d4911f" }}>SHARE YOUR EXPERIENCE </h3>
                <br />
                {/* <b>
                    <h1>Name</h1>
                </b>
                <input type="Name" name="name" class="box" placeholder="" required id=""/> */}
                <b>
                    <h1>Rate our overall services</h1>
                    <br />
                </b>
                <div class="slidecontainer">
                    {/* <!-- <p>Default range slider:</p> --> */}
                    <input
                        type="range"
                        min="1"
                        max="5"
                        value={rating}
                        name="rating"
                        onChange={e => setRating(e.target.value)}
                    />
                </div>
                <b>
                    <strong>
                        <h1>Write Your Feedback</h1>
                    </strong>
                </b>

                <textarea
                    class="textarea"
                    id=""
                    rows="5"
                    cols="45"
                    required
                    style={{ border: "var(--border)" }}
                    name="content"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                ></textarea>

                <input type="submit" value="Submit" class="btn" />
            </form>
        </div>
    );
}

export default ReviewForm;
