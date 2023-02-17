function InputTypeSelect({ value, setValue }) {
    return (
        <>
            <b>
                <span>Book Condition *</span>
            </b>
            <select
                name="Book Condition"
                style={{
                    height: "fit-content",
                    width: "fit-content",
                    "font-size": "15px",
                }}
                id=""
                value={value}
                onChange={e => setValue(e.target.value)}
            >
                <option value="">select</option>
                <option value="fine/like new">Fine/Like New</option>
                <option value="near fine">Near Fine</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
            </select>
        </>
    );
}

export default InputTypeSelect;
