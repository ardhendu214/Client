import { authentication, getToken } from "../../hook/useLogin";
import { promiseToast } from "../../hook/useToast";
import getUser from "../userRequests/getUser";

const Contact = book => {
    promiseToast(handleContact(book));
};

const handleContact = async book => {
    if (!authentication()) return Promise.reject("You Need To Login First!");
    const user = await getUser(getToken()._id);
    const donor = await getUser(book.donatedBy);

    // if (donor && user) {
    const email_subject = "Request to Collect Donated Book";
    const email_body = `Hello! ${donor.name},
        I'm ${user.name} from "${user.address}". I have seen your post on **Yelow Pages** about your book "${book.title}" written by "${book.author}" and I am intrested to get the book. So, if the book is still available kindly give a response to this email.   
                                    Thank You
                                    ${user.name}`;
    // }

    if (book.donatedBy === user._id)
        return Promise.reject("You Can't Contact for your Own Donated Book!");
    window.location.assign(
        `mailto:${donor.email}?subject=${email_subject}&body=${email_body}`
    );
};

export default Contact;
