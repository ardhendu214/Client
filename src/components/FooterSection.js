import { Link } from "react-router-dom";
import worldMap from "../image/worldmap.png";
function FooterSection() {
    return (
        <section className="footer">
            <div className="box-container">
                <div className="box">
                    <h3>quick links</h3>
                    <Link to="/">
                        <i className="fas fa-arrow-right"></i> Home
                    </Link>
                    <Link to="/books">
                        <i className="fas fa-arrow-right"></i> All Books
                    </Link>
                    <Link to="/bookdonationform">
                        <i className="fas fa-arrow-right"></i> Donate
                    </Link>
                    <Link to="/reviews">
                        <i className="fas fa-arrow-right"></i> Feedbacks
                    </Link>
                </div>

                <div className="box">
                    <img src={worldMap} className="map" alt="" />
                </div>
                <div className="box">
                    <h3>contact info</h3>
                    <Link to="https://wa.me/918637546585" target={"_blank"}>
                        {" "}
                        <i className="fas fa-phone"></i> +91 8637546585{" "}
                    </Link>
                    <Link to="https://wa.me/919564714174" target={"_blank"}>
                        {" "}
                        <i className="fas fa-phone"></i> +91 9564714174{" "}
                    </Link>
                    <a href="mailto:phoenix.squad.2022@gmail.com">
                        {" "}
                        <i className="fas fa-envelope"></i>{" "}
                        phoenix.squad.2022@gmail.com{" "}
                    </a>
                    <Link to="/about_us">
                        {" "}
                        <i className="fas fa-arrow-right"></i> about us{" "}
                    </Link>
                </div>
            </div>
            <div className="share">
                <Link to="/" className="fab fa-facebook-f"></Link>
                <Link to="/" className="fab fa-twitter"></Link>
                <Link to="/" className="fab fa-instagram"></Link>
            </div>
            <div className="credit">
                {" "}
                created by Team
                <span
                    className="font-effect-fire"
                    style={{
                        fontFamily: "Princess Sofia",
                        fontSize: "3rem",
                        fontWeight: "bold",
                        color: "black",
                    }}
                >
                    Phoenix
                </span>{" "}
                | &copy; all rights reserved{" "}
            </div>
            ''
        </section>
    );
}

export default FooterSection;
