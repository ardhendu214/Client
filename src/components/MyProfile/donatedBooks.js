import { useState, useEffect } from "react";
import { getToken } from "../../hook/useLogin";
import getAllBooks from "../bookRequests/getAllBooks";

import "../../assets/css/userSection.css";
import DeleteBook from "../bookRequests/deleteBook";
import BooksSection from "./booksSection";

const DonatedBooks = () => {
    const [books, setBooks] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            const { data } = await getAllBooks();
            setBooks(data.filter(book => book.donatedBy === getToken()._id));
        };
        fetchBooks();
    }, []);

    const handleDelete = book => {
        setBooks(books.filter(b => b._id !== book._id));
        DeleteBook(book);
    };

    return (
        <div className="admin_all2">
            <BooksSection
                lable="Donated Books"
                books={books}
                onDelete={handleDelete}
            />
        </div>
    );
};

export default DonatedBooks;
