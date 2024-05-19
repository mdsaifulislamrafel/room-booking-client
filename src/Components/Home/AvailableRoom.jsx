import { useLoaderData } from "react-router-dom";
import Available from "./Available";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const AvailableRoom = () => {
    const loader = useLoaderData();
    const [filterType, setFilterType] = useState("ALL");

    const handleFilterClick = (filter) => {
        setFilterType(filter);
    };

    const sortRooms = (rooms, filter) => {
        if (filter === "ALL") {
            return rooms;
        } else if (filter === "price_per_night") {
            return rooms.slice().sort((a, b) => a.price_per_night - b.price_per_night);
        }
        return rooms;
    };

    const sortedRooms = sortRooms(loader, filterType);

    return (
        <div>
            <Helmet>
                <title>Available Rooms</title>
            </Helmet>
            <div className="flex justify-center mb-4">
                <details className="dropdown m-2">
                    <summary className="btn">Sort By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a onClick={() => handleFilterClick("ALL")}>ALL</a></li>
                        <li><a onClick={() => handleFilterClick("price_per_night")}>Price Per Night</a></li>
                    </ul>
                </details>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-5 w-[95%] mx-auto lg:grid-cols-3">
                {sortedRooms.map(abel => (
                    <Available key={abel._id} abel={abel} />
                ))}
            </div>
        </div>
    );
};

export default AvailableRoom;
