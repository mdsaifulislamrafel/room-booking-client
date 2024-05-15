import { useLoaderData } from "react-router-dom";
import Available from "./Available";

const AvailableRoom = () => {
    const loader = useLoaderData();
    console.log(loader);
    return (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {
                loader.map(abel => <Available key={abel._id} abel={abel}></Available>)
            }
        </div>
    );
};

export default AvailableRoom;