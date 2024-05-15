/* eslint-disable react/prop-types */
import { MdOutlineCancel, MdOutlinePostAdd } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import moment from 'moment';

const BookingRow = ({ book, books, setBooks }) => {

  const { _id, customerName, img, email, price, date } = book;

  const handleDelete = () => {

    const cancelDate = moment(date).subtract(1, 'days');

    if (moment().isBefore(cancelDate)) {
      // Ask for confirmation
      Swal.fire({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this booking!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        // Proceed with deletion if confirmed
        if (result.isConfirmed) {
          fetch(`https://hotel-room-server-pi.vercel.app/bookings/${_id}`, {
            method: 'DELETE'
          })
          .then(res => {
            if (!res.ok) {
              throw new Error('Failed to delete booking');
            }
            return res.json();
          })
          .then(data => {
            console.log(data);
            const updatedBooks = books.filter(book => book._id !== _id);
            setBooks(updatedBooks);
            Swal.fire({
              title: "Success!",
              text: "Booking deleted successfully",
              icon: "success",
            });
          })
          .catch(error => {
            console.error('Error deleting booking:', error);
            // Show an error message to the user
            Swal.fire({
              title: "Error!",
              text: "Failed to delete booking",
              icon: "error",
            });
          });
        }
      });
    } else {
      // If it's not possible to cancel, show an error message
      Swal.fire({
        title: "Cannot Cancel",
        text: "You can only cancel bookings 1 day before the booked date.",
        icon: "error",
      });
    }
  };
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{customerName}</td>
      <td>{email}</td>
      <td>{price}</td>
      <td>{date}</td>
      <th>
        <Link to="/post">
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
