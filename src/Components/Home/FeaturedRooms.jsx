import { useEffect, useState } from "react";
import Room from "./Room";

const FeaturedRooms = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch('https://hotels-rooms-servers.vercel.app/rooms')
            .then(response => response.json())
            .then(data => {
                setRooms(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
            <h2 className="text-3xl my-8 text-center font-bold uppercase bg-300% bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">Featured Rooms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {rooms.map(room => (
                    <Room key={room._id} room={room} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedRooms;
