import "../assets/css/pageNotFound.css";
import pageNotFoundImage from "../image/pageNotFound.jpg";
function PageNotFound() {
    return ( 
        <>
            <div class="error1">
                 {/* <h1>Page not found !!</h1> */}
            </div>
            <div class="error"><img src={pageNotFoundImage} alt="Loading"/></div>
        </>
     );
}

export default PageNotFound;