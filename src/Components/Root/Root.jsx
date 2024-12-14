import { Outlet } from "react-router-dom";

import Navber from "../Home/Navber";
import NewsletterSignup from "../Home/NewsLatter";

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <div className='min-h-[calc(100vh-420px)] '>

                <Outlet></Outlet>
            </div>
            <NewsletterSignup></NewsletterSignup>
        </div>
    );
};

export default Root;