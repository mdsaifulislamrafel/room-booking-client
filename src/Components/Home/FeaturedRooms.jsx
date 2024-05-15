import { useEffect, useState } from "react";
import Room from "./Room";

const FeaturedRooms = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch('https://hotel-room-server-pi.vercel.app/rooms')
            .then(response => response.json())
            .then(data => {
                setRooms(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mb-7">
            {rooms.map(room => (
                <Room key={room._id} room={room} />
            ))}
        </div>
    );
};

export default FeaturedRooms;
