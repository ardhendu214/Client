import { Route, Routes } from "react-router-dom";
import { getToken } from "../hook/useLogin";
import AboutUs from "./AboutUs";
import AdminHome from "./admin Section/adminHome";
import AllBooksAdmin from "./admin Section/allBooksAdmin";
import AllUsersAdmin from "./admin Section/allUsersAdmin";
import AllBooks from "./AllBooks";
import BookDetails from "./BookDetails";
import BookDonationForm from "./BookDonationForm";
import ForgetPassword from "./ForgetPassword";
import LoginForm from "./LoginForm";
import Mydetails from "./Mydetails";
import DonatedBooks from "./MyProfile/donatedBooks";
import WishlistBooks from "./MyProfile/wishlistBooks";
import { PrivateRoute } from "./OutletComponent";
import PageNotFound from "./PageNotFound";
import Registration from "./Registration";
import ReviewForm from "./review/ReviewForm";
import ReviewSection from "./ReviewSection";
import Sections from "./Sections";
import SendAccountVerificationLink from "./SendAccountVerificationLink";
import SendPasswordResetLink from "./SendPasswordResetLink";
import VerifyAccount from "./VerifyAccount";

function RouteComponent() {
    return (
        <Routes>
            <Route path="/" element={<Sections />}></Route>
            <Route path="/reviews" element={<ReviewSection />} ></Route>
            <Route path="/registration" element={<Registration />}></Route>
            <Route path="/signin" element={<LoginForm />}></Route>
            <Route path="/forget-pasword" element={<SendPasswordResetLink />}></Route>
            <Route path="/forget-pasword/:token" element={<ForgetPassword />}></Route>
            <Route path="/verify-account" element={<SendAccountVerificationLink />}></Route>

            <Route path="/verify-account/:token" element={<VerifyAccount />}></Route>

            <Route path="/books" element={<AllBooks />}></Route>

            <Route path="/bookdonationform" element={<PrivateRoute><BookDonationForm /></PrivateRoute>}></Route>
            <Route path="/feedback" element={<PrivateRoute><ReviewForm/></PrivateRoute>}></Route>
            <Route path="/myprofile" element={<PrivateRoute><Mydetails /></PrivateRoute>}></Route>
            <Route path="/my-donated-books" element={<PrivateRoute><DonatedBooks /></PrivateRoute>}></Route>
            <Route path="/my-wishlist" element={<PrivateRoute><WishlistBooks /></PrivateRoute>}></Route>

            {/* <Route path="/*" element={<OutletComponentTrue />}>
                <Route path="bookdonationform" element={<BookDonationForm />} />
                <Route path="feedback" element={<ReviewForm />}></Route>
                <Route path="myprofile" element={<Mydetails />}></Route>
                <Route
                    path="my-donated-books"
                    element={<DonatedBooks />}
                ></Route>
                <Route path="my-wishlist" element={<WishlistBooks />}></Route>
            </Route> */}

            {getToken() && getToken().isAdmin ? (
                <>
                    <Route
                        path="/admin-section-allbooks"
                        element={<AllBooksAdmin />}
                    >
                        Admin Section
                    </Route>
                    <Route
                        path="/admin-section-allusers"
                        element={<AllUsersAdmin />}
                    >
                        Admin Section
                    </Route>
                    <Route path="/admin-section" element={<AdminHome />}>
                        Admin Section
                    </Route>
                </>
            ) : null}
            <Route path="/about_us" element={<AboutUs />}></Route>
            <Route path="/books/:_id" element={<BookDetails />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
    );
}

export default RouteComponent;
