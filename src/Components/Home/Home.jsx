import Banner from "../Banner/Banner";
import FeaturedRooms from "./FeaturedRooms";
import Map from "./Map";


const Home = () => {
    return (
        <div>
            <div className="max-w-[1200px] mx-auto mt-10">
                <Banner></Banner>
                <Map></Map>
                <FeaturedRooms></FeaturedRooms>
            </div>
        </div>
    );
};

export default Home;