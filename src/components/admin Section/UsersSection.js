import ProfileUser from "./ProfileUser";

const UsersSection = ({ users, onDelete, lable }) => {
    if (users)
        return (
            <div>
                <div className="heading">
                    <span>{lable}</span>
                    <h3 style={{ marginTop: "1rem" }}>
                        {`Showing ${users.length} ${
                            users.length > 1 ? "users" : "user"
                        }`}
                    </h3>
                </div>
                <table style={{ margin: "auto" }}>
                    {users.map(user => (
                        <ProfileUser
                            key={user._id}
                            user={user}
                            onDelete={onDelete}
                            pageLable={lable}
                        />
                    ))}
                </table>
            </div>
        );

    return (
        <div className="admin_all2">
            <div className="heading">
                <span>{lable} is Empty!</span>
            </div>
        </div>
    );
};

export default UsersSection;
