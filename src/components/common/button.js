const Button = ({ lable, onClick, className }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={"btn " + className}
            style={{ margin: "0.5rem" }}
        >
            {lable}
        </button>
    );
};

export default Button;
