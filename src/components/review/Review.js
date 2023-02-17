import _ from "lodash";
import { useEffect, useState } from "react";
import { getToken } from "../../hook/useLogin";
import Button from "../common/button";
import getProfilePic from "../userRequests/getProfilePic";
import getUser from "../userRequests/getUser";

const Review = ({ review, onDelete }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const getDonor = async () => {
            setUser(await getUser(review.user));
        };
        getDonor();
    }, [review.user]);

    let stars = _.range(review.rating);
    const emptyStars = _.range(5 - review.rating);

    return (
        <div className="swiper-slide box">
            <img
                src={
                    user
                        ? getProfilePic(user)
                        : `${process.env.REACT_APP_API_URL}/default_images/man.png`
                }
                alt="Profile Pic"
            />
            <h3>{user ? user.name : "Unknown"}</h3>
            <p>{review.content}</p>
            <p>
                Published On :{" "}
                <time>{new Date(review.publishedTime).toLocaleString()}</time>
            </p>
            <div className="stars">
                {stars.map(ele => (
                    <i key={ele} className="fa fa-star"></i>
                ))}
                {emptyStars.map(ele => (
                    <i key={ele} className="fa fa-star-o"></i>
                ))}
            </div>
            {getToken() && review.user === getToken()._id ? (
                <Button
                    lable="Delete"
                    className="btn-danger"
                    onClick={() => onDelete(review)}
                />
            ) : null}
        </div>
    );
};

export default Review;
