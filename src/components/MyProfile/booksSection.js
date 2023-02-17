import ProfileBook from "./ProfileBook";

const BooksSection = ({ books, onDelete, lable }) => {
    if (books && books.length > 0)
        return (
            <div>
                <div className="heading">
                    <span>{lable}</span>
                    <h3 style={{ marginTop: "1rem" }}>
                        {`Showing ${books.length} ${
                            books.length > 1 ? "books" : "book"
                        }`}
                    </h3>
                </div>
                <table style={{ margin: "auto" }}>
                    {books.map(book => (
                        <ProfileBook
                            key={book._id}
                            book={book}
                            onDelete={onDelete}
                            pageLable={lable}
                        />
                    ))}
                </table>
            </div>
        );

    return (
        <div className="heading">
            <span>{lable} is Empty!</span>
        </div>
    );
};

export default BooksSection;
