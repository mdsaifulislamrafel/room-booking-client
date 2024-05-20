import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Booking = () => {
    const loader = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, title, price_per_night, representative_image, availability } = loader;
    const navigate = useNavigate();

    const handleBooking = (e) => {
        e.preventDefault();

        if (availability === 'unavailable') {
            Swal.fire({
                icon: 'error',
                title: 'Room is unavailable',
                text: 'Sorry, this room is not available for booking.',
                showConfirmButton: false,
                timer: 3000,
            });
            return;
        }

        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const date = formData.get('date');
        const price = formData.get('price');
        const id = _id;

        const booking = {
            customerName: name,
            img: representative_image,
            email: email,
            date: date,
            price: price,
            id
        };


        fetch('https://hotels-rooms-servers.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Room booked successfully',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    navigate('/bookings');
                }
            });
    };

    const handleUnavailable = (id) => {
        fetch(`https://hotels-rooms-servers.vercel.app/rooms/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ availability: 'unavailable' }),
        })
    };

    return (
        <div className="max-w-[1200px] mx-auto w-full">
            <div className="flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-center font-bold">Title: {title}</h1>
                </div>
                <div className="card shrink-0 w-full">
                    <form onSubmit={handleBooking}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="name"
                                defaultValue={user?.displayName}
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                defaultValue={user?.email}
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                name="price"
                                defaultValue={'$' + price_per_night}
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input
                                type="date"
                                name="date"
                                placeholder="Pick a date"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            onClick={() => handleUnavailable(_id)}
                            className="btn mt-10 mb-10 bg-cyan-300 w-full"
                        >
                            Book
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;
