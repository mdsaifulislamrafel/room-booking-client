import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

const RoomDetails = () => {
  const details = useLoaderData();
  const [review, setReview] = useState([]);
  const {
    _id,
    price_per_night,
    room_size,
    room_images,
    special_offers,
    description,
    representative_image,
    title,
    availability
  } = details;

  useEffect(() => {
    fetch(`https://hotels-rooms-servers.vercel.app/review`)
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      })
  }, []);
  const data = review?.filter(r => r.postId.id === _id)



  // Filter reviews for the specific room

  return (
    <div className="flex ard-body hero min-h-screen">
      <Helmet>
        <title>Room Details</title>
      </Helmet>
      <div className="card-body">
        <div className="hero min-h-screen">
          <div className="hero-content flex flex-col md:flex-row gap-5">
            <img src={representative_image} className="max-w-sm rounded-lg shadow-2xl" alt={title} />
            <div className="space-y-5">
              <h1 className="text-5xl font-bold">{title}</h1>
              <p className="py-2">{description}</p>
              <p className="py-2">{availability}</p>
              <p>Price per night: {price_per_night}</p>
              <p>Room size: {room_size}</p>
              {special_offers && <p>Special offers: {special_offers}</p>}
              <Link to={`/room/${_id}`}>
                <button className="btn mt-4 btn-primary">Book Now</button>
              </Link>
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-center">More pictures</h1>
        <div className="flex flex-wrap justify-center items-center mt-8">
          {room_images.map((image, index) => (
            <img key={index} src={image} className="max-w-sm rounded-lg shadow-2xl m-2" alt={`Room Image ${index + 1}`} />
          ))}
        </div>
        <div>
          <h1 className="text-4xl font-bold text-center my-5">Reviews</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
              data.length > 0 ?
                data.map((review) => (
                  <div key={review._id}>
                    <div className="">
                      <div className="flex flex-col md:flex-row gap-5">
                        <div className="space-y-5 border-4 border-emerald-300 p-4">
                          <p className="py-2 text-xl uppercase font-semibold">User Name : {review.username}</p>
                          <p className="py-2 text-1xl">Comment : {review.comment}</p>
                          <Rating
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )) : <p>Review Item No added</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
