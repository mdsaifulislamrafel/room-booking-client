import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import { Helmet } from 'react-helmet-async';
const MyBooking = () => {
    const { user } = useContext(AuthContext);
    const [books, setBooks] = useState([]);

    const url = `https://hotels-rooms-servers.vercel.app/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooks(data))
            .catch(error => console.error('Error fetching bookings:', error));
    }, [url]);


    return (
        <div className="overflow-x-auto">
            <Helmet>
                <title>My Booking</title>
            </Helmet>
            <table className="table font-bold">
                <thead>
                    <tr className="text-2xl text-black">
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Post</th>
                        <th>Update</th>
                        <th>Cancel</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book => (
                        <BookingRow
                            key={book._id}
                            book={book}
                            books={books}
                            setBooks={setBooks}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyBooking;
