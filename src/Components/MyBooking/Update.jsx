import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Update = () => {
  const navigate = useNavigate();
  const dateData = useLoaderData();
  const { _id } = dateData; // Assuming dateFrom and dateTo are available

  const { user } = useContext(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const date = form.date.value;

    const order = {
      date: date
    };

    fetch(`http://localhost:5000/bookings/${_id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then(data => {
        
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'Date updated successfully',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
        // Redirect after showing the toast
        navigate("/bookings")
      })
      .catch(error => {
        console.error('Error updating data:', error);
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'error',
          title: 'Failed to update date',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
      });
  };

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" placeholder="Pick a date" className="input input-bordered" required />
        </div>
        <button className="btn">Update</button>
      </form>
    </div>
  );
};

export default Update;
