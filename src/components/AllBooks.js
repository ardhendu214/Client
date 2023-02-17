import { useEffect, useState } from "react";
import "../assets/css/allBooks.css";
import Book from "./AllBooks/Book";
import getAllBooks from "./bookRequests/getAllBooks";
import SearchBox from "./fromElement/SearchBox";

function AllBooks() {
    const [books, setBooks] = useState(null);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchBooks = async () => {
            const { data } = await getAllBooks();
            setBooks(data);
        };
        fetchBooks();
    }, []);

    const handleSearch = ({ value }) => {
        setSearch(value.toLowerCase());
    };

    let allbooks = books;

    if (allbooks && search)
        allbooks = books.filter(book =>
            book.title.toLowerCase().includes(search)
        );

    if (books)
        return (
            <section class="featured" id="featured">
                <h1 class="heading">
                    <span>all books</span>
                    <SearchBox value={search} onChange={handleSearch} />
                    <h3>
                        {allbooks.length
                            ? `Showing ${allbooks.length} ${
                                  allbooks.length > 1 ? "books" : "book"
                              }`
                            : "No Books Available"}
                    </h3>
                </h1>
                <div class="swiper featured-slider">
                    <div class="swiper-wrapper allBook">
                        {allbooks.map(book => (
                            <Book book={book} />
                        ))}
                    </div>
                </div>
            </section>
        );
}

export default AllBooks;
