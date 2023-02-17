const SearchBox = ({ value, onChange }) => {
    return (
        <form action="" className="search-form">
            <input
                type="search"
                name=""
                placeholder="search here..."
                id="search-box"
                value={value}
                onChange={e => onChange(e.target)}
            />
            <span className="fas fa-search" style={{ cursor: "pointer" }} />
        </form>
    );
};

export default SearchBox;
