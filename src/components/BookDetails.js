import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/bookDetails.css";
import BookImage from "./bookDetails/BookImage";
import OtherBookDetails from "./bookDetails/OtherBookDetails";
import getBookImg from "./bookRequests/getBookImg";
import getBook from "./bookRequests/getBook";

function BookDetails() {
    const params = useParams();
    const [book, setBook] = useState(null);
    useEffect(() => {
        async function getBookDetails() {
            const { data } = await getBook(params._id);
            setBook(data);
        }
        getBookDetails();
    }, [params._id]);
    if (book) {
        return (
            <div class="bookdetails">
                <BookImage src={getBookImg(book)} />
                <OtherBookDetails book={book} />
            </div>
        );
    }
}

export default BookDetails;
