import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Booking = () => {
    const loader = useLoaderData();
    const {user} = useContext(AuthContext); 
    const { title, price_per_night} = loader;

    const handleBooking = e => {
        e.preventDefault(); 
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const date = formData.get('date');
        const price = formData.get('price');
        console.log(name, email, date, price);
        const booking = {

            customerName : name, 
            email: email, 
            date: date , 
            price: price
        }
        console.log(booking)

        fetch('http://localhost:5000/bookings', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then (data => {
            if(data.insertedId){
                alert('room book successfully')
            }
        })

    }
    

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
                        <input type="text" name="name" placeholder="name" defaultValue={user?.displayName} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input name="price" defaultValue={'$' + price_per_night} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" placeholder="Pick a date" className="input input-bordered" required />
                    </div>
                    <button className="btn mt-10 mb-10 bg-cyan-300 w-full">Book</button>
                </form>
            </div>
        </div>
       
    </div>
    
    );
};

export default Booking;