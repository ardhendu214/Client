import { NavLink } from "react-router-dom";
import Button from "../common/button";
import getProfilePic from "../userRequests/getProfilePic";

const ProfileUser = ({ user, onDelete }) => {
    return (
        <tr style={{ height: "20rem" }}>
            <td>
                <img
                    className="book_img"
                    src={getProfilePic(user)}
                    alt={user.name}
                />
            </td>
            <td
                style={{ width: "80%", textAlign: "left", paddingLeft: "9rem" }}
            >
                <div>
                    <strong>Name : </strong> <span>{user.name}</span>
                </div>

                <div>
                    <strong>Email : </strong> <span>{user.email}</span>
                </div>
                <div>
                    <strong>Gender : </strong> <span>{user.gender}</span>
                </div>
                <div>
                    <strong>Address : </strong> <span>{user.address}</span>
                </div>
            </td>
            <td>
                <Button lable="Delete" onClick={() => onDelete(user)} />
            </td>
        </tr>
    );
};

export default ProfileUser;
