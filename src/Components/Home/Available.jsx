/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Available = ({ abel }) => {
    const { _id, description, representative_image, title, availability, price_per_night } = abel;
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className="card w-96 bg-base-100 shadow-xl mt-11 mb-10">
            <Link to={`/rooms/${_id}`}>
                <img src={representative_image} className="rounded-lg w-full" alt="Room" />
            </Link>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h2 className="card-title">{availability}</h2>
                <p>{description}</p>
                <p>Price ${price_per_night}</p>
                <div className="card-actions justify-start">
                    <Link to={`/room/${_id}`}><button className="btn btn-primary">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Available;
