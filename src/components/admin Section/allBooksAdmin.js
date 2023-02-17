import { useState, useEffect } from "react";
import { getToken } from "../../hook/useLogin";
import getAllBooks from "../bookRequests/getAllBooks";

import "../../assets/css/userSection.css";
import DeleteBook from "../bookRequests/deleteBook";
import BooksSection from "../MyProfile/booksSection";
import { toast } from "react-toastify";
import AdminNavigationPannel from "./adminNavigationPannel";

const AllBooksAdmin = () => {
    const [books, setBooks] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            const { data } = await getAllBooks();
            setBooks(data);
        };
        fetchBooks();
    }, []);

    const handleDelete = book => {
        setBooks(books.filter(b => b._id !== book._id));
        DeleteBook(book);
    };
    if (getToken() && getToken().isAdmin)
        return (
            <table>
                <tr className="admin_all" style={{ width: "100vw" }}>
                    <td className="admin_all1">
                        <AdminNavigationPannel />
                    </td>
                    <td className="admin_all2">
                        <BooksSection
                            lable="All Books"
                            books={books}
                            onDelete={handleDelete}
                        />
                    </td>
                </tr>
            </table>
        );
    return toast.error("Access Denied!");
};

export default AllBooksAdmin;
