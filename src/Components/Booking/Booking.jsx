import { useLoaderData } from "react-router-dom";

const Booking = () => {
    const loader = useLoaderData(); 
    const {  title } = loader;

    return (
        <div>
          <h1>{title}</h1>
        </div>
    );
};

export default Booking;