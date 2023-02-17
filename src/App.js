import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/global.css";
import ButtomNavbar from "./components/ButtomNavbar";
import FooterSection from "./components/FooterSection";
import HeaderSection from "./components/HeaderSection";
import RouteComponent from "./components/RouteComponent";
import loginContext from "./context/loginContext";
import { authentication } from "./hook/useLogin";
function App() {
    const [isLogedin, setIsLogedin] = useState(authentication());
    return (
        <div>
            <ToastContainer
                position={"top-center"}
                hideProgressBar={false}
                autoClose={2000}
                closeOnClick={true}
                pauseOnHover={true}
                draggable={true}
                progress={undefined}
                theme={"colored"}
                style={{ scale: "1.2" }}
            />
            <loginContext.Provider value={{ isLogedin, setIsLogedin }}>
                <HeaderSection />
                <RouteComponent />
                <FooterSection />
                <ButtomNavbar />
            </loginContext.Provider>
        </div>
    );
}

export default App;
