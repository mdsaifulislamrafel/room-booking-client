import Banner from "../Banner/Banner";
import FeaturedRooms from "./FeaturedRooms";
import Map from "./Map";
import { Helmet } from 'react-helmet-async';
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="max-w-[1200px] mx-auto mt-10">
                <Banner></Banner>
                <Map></Map>
                <FeaturedRooms></FeaturedRooms>
                <Testimonials />
            </div>
        </div>
    );
};

export default Home;