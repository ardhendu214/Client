import { useState, useEffect } from "react";
import { getToken } from "../../hook/useLogin";
import getAllUsers from "../userRequests/getAllUsers";
import DeleteUser from "../userRequests/deleteUser";

import "../../assets/css/userSection.css";
import { toast } from "react-toastify";
import UsersSection from "./UsersSection";
import AdminNavigationPannel from "./adminNavigationPannel";

const AllUsersAdmin = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            const { data } = await getAllUsers();
            setUsers(data);
        };
        fetchUsers();
    }, []);

    const handleDelete = user => {
        setUsers(users.filter(u => u._id !== user._id));
        DeleteUser(user);
    };
    if (getToken() && getToken().isAdmin)
        return (
            <table>
                <tr className="admin_all" style={{ width: "100vw" }}>
                    <td className="admin_all1">
                        <AdminNavigationPannel />
                    </td>
                    <td className="admin_all2">
                        <UsersSection
                            lable="All Users"
                            users={users}
                            onDelete={handleDelete}
                        />
                    </td>
                </tr>
            </table>
        );
    return toast.error("Access Denied!");
};

export default AllUsersAdmin;
