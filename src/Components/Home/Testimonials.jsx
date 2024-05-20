import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { Navigation } from 'swiper/modules';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <section className="my-20">
            <h1 className="text-4xl font-bold text-center uppercase underline my-5">Reviews</h1>
            <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
                {reviews.map(review => (
                    <SwiperSlide key={review._id}>
                        <div className="flex flex-col items-center mx-24 my-16">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className="py-8">{review.comment}</p>
                            <h3 className="text-2xl text-orange-400">{review.username}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
