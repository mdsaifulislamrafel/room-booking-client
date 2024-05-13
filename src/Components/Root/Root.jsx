import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navber from "../Home/Navber";
import NewsletterSignup from "../Home/NewsLatter";

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <NewsletterSignup></NewsletterSignup>
        </div>
    );
};

export default Root;