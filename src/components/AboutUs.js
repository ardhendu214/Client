import "../assets/css/aboutUs.css";
import ardhenduPic from "../image/ardhendu.jpg";
import bhairabPic from "../image/bably.jpg";
import harekrishnaPic from "../image/hare.jpg";
import sujanPic from "../image/sujan.jpg";
import sunandanPic from "../image/sunandan.jpg";
import Member from "./about_us/Member";
function AboutUs() {
    const dept = "Computer Science and Engineering";
    const college = "Techno International Batanagar";
    function member(name, dept, college, mobile, email, fbLink, ldLink, image) {
        this.name = name;
        this.dept = dept;
        this.college = college;
        this.mobile = mobile;
        this.email = email;
        this.fbLink = fbLink;
        this.ldLink = ldLink;
        this.image = image;
    }
    const ardhendu = new member(
        "Ardhendu Dhua",
        dept,
        college,
        "8637546585",
        "ardhendudhua@gmail.com",
        "https://www.facebook.com/ardhendu.dhua.1",
        "https://www.linkedin.com/in/ardhendu-dhua-ab7626247/",
        ardhenduPic
    );
    const sunandan = new member(
        "Sunandan Ghosh",
        dept,
        college,
        "9593597016",
        "gsanu2001@gmail.com",
        "https://www.facebook.com/sunandan.ghosh.98",
        "https://www.linkedin.com/in/sunandan-ghosh-609285220/",
        sunandanPic
    );
    const harekrishna = new member(
        "Harekrishna Jana",
        dept,
        college,
        "8016511666",
        "harekrishna8016@gmail.com",
        "https://www.facebook.com/harekrishna.jana.9655",
        "https://www.linkedin.com/in/harekrishna-jana-481126217/",
        harekrishnaPic
    );
    const bhairab = new member(
        "Bhairab Roy",
        dept,
        college,
        "8345951554",
        "roybhairab45@gmail.com",
        "https://www.facebook.com/virab.roy",
        "https://www.linkedin.com/in/bhairab-roy-363606246/",
        bhairabPic
    );
    const sujan = new member(
        "Sujan Haldar",
        dept,
        college,
        "8370986531",
        "hsujan122@gmail.com",
        "https://www.facebook.com/sujanhaldara1",
        "https://www.linkedin.com/in/sujan-haldar-493303234/",
        sujanPic
    );

    return (
        <section class="aboutus" id="aboutus">
            <h1 class="heading1">
                <span>About Us</span>
            </h1>
            <p className="content">
                Our project's objective is to create a website where people can
                easily donate their gently used or new books which they don't
                need in future and where they can also collect there necessary
                books if available. <br />
                <br />
                <ul>
                    Our aim to promote
                    <li>literacy and love of reading.</li>
                    <li>Help the Environment by Recycling.</li>
                    <li>Sharing favourite stories with others.</li>
                </ul>
            </p>
            <h1 class="heading1">
                <span>Meet Our Team Members</span>{" "}
            </h1>

            <div class="aboutus-container">
                <div class="aboutus-container-wrapper">
                    <Member memberDetails={harekrishna} />
                    <Member memberDetails={sujan} />
                    <Member memberDetails={sunandan} />
                    <Member memberDetails={bhairab} />
                    <Member memberDetails={ardhendu} />
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
