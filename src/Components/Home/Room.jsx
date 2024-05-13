import { Link } from "react-router-dom";

const Room = ({ room }) => {

    const {_id,description,representative_image, title, availability} = room; 

    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-11 mb-10">
       <img src={representative_image} className="rounded-lg" alt="Shoes" />
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <h2 className="card-title">{availability}</h2>
          <p>{description}</p>
          <div className="card-actions justify-start">
            <Link to={`/rooms/${_id}`}><button className="btn btn-primary">Book Now</button></Link>
          </div>
        </div>
      </div>
  
    );
};

export default Room;