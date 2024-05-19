/* eslint-disable react/prop-types */
import { MdOutlineCancel, MdOutlinePostAdd } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import moment from 'moment';

const BookingRow = ({ book, books, setBooks }) => {

  const { _id, customerName, img, email, price, date, id } = book;


  const handleAvailable = (roomId) => {
    fetch(`http://localhost:5000/room-available/${roomId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        availability: 'Available'
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log('Room availability updated:', data);
    })
    .catch(error => {
      console.error('Error updating room availability:', error);
    });
  };

  const handleDelete = () => {
    const cancelDate = moment(date).subtract(1, 'days');

    if (moment().isBefore(cancelDate)) {
      Swal.fire({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this booking!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/bookings/${_id}`, {
            method: 'DELETE'
          })
          .then(res => {
            if (!res.ok) {
              throw new Error('Failed to delete booking');
            }
            return res.json();
          })
          .then(data => {
            const updatedBooks = books.filter(book => book._id !== _id);
            setBooks(updatedBooks);
            Swal.fire({
              title: "Success!",
              text: "Booking deleted successfully",
              icon: "success",
            });
            handleAvailable(id);
          })
          .catch(error => {
            console.error('Error deleting booking:', error);
            Swal.fire({
              title: "Error!",
              text: "Failed to delete booking",
              icon: "error",
            });
          });
        }
      });
    } else {
      Swal.fire({
        title: "Cannot Cancel",
        text: "You can only cancel bookings 1 day before the booked date.",
        icon: "error",
      });
    }
  };

  return (
    <tr data-aos="fade-up" data-aos-duration="1000">
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar" />
            </div>
          </div>
        </div>
      </td>
      <td>{customerName}</td>
      <td>{email}</td>
      <td>{price}</td>
      <td>{date}</td>
      <th>
        <Link to={`/post/:${id}`}>
          <button className="btn btn-ghost text-3xl">
            <MdOutlinePostAdd />
          </button>
        </Link>
      </th>
      <th>
        <Link to={`/bookings/${_id}`}>
          <button className="btn btn-ghost text-2xl">
            <GrDocumentUpdate />
          </button>
        </Link>
      </th>
      <th>
        <button onClick={handleDelete} className="btn btn-ghost text-3xl">
          <MdOutlineCancel />
        </button>
      </th>
    </tr>
  );
};

export default BookingRow;
