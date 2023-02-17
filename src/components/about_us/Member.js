import faceboookImg from "../../image/facebook.png";
import linkdinImg from "../../image/linkedin.png";
import { Link } from "react-router-dom";

function Member({ memberDetails }) {
    const { name, dept, college, mobile, email, fbLink, ldLink, image } =
        memberDetails;
    return (
        <div class="aboutus box">
            <div class="content">
                <div class="aboutimage">
                    <img src={image} alt="" />
                </div>
                <div class="membername">
                    <h3>{name}</h3>
                </div>
                <br />
                <p>{dept}</p>
                <p>{college}</p>
                <Link to={`https://wa.me/91${mobile}`} target="_blank">
                    <p>Mobile Number: {mobile}</p>
                </Link>
                <a href={`mailto:${email}`}>
                    <p>Email Id: {email}</p>
                </a>
                <br />
                <div class="facebook">
                    <Link to={fbLink} target="_blank">
                        <img src={faceboookImg} alt="Example" />
                    </Link>
                    <Link to={ldLink} target="_blank">
                        <img src={linkdinImg} alt="Example" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Member;
