/* eslint-disable jsx-a11y/anchor-is-valid */
import ArivalBooks from "./arival/ArivalBooks";

import { useEffect, useState } from "react";
import getAllBooks from "./bookRequests/getAllBooks";

function ArivalSection() {
    const [books, setBooks] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            const { data } = await getAllBooks();
            setBooks(data);
        };
        fetchBooks();
    }, []);

    if (books) {
        const newest = books
            .slice(Math.abs(books.length - 8), books.length)
            .reverse();
        const firstHalf = newest.slice(0, newest.length / 2);
        const secondHalf = newest.slice(newest.length / 2, newest.length);

        return (
            <section className="arrivals" id="arrivals">
                <h1 className="heading">
                    <span>new arrivals</span>
                </h1>
                <ArivalBooks books={firstHalf} />
                <ArivalBooks books={secondHalf} />
            </section>
        );
    }
}

export default ArivalSection;
