import Lottie from "lottie-react";
import robotAnimation from "../../../public/robotAnimation.json";
const NoItem = () => {
    return (
        <div className="w-full md:w-[30%] lg:w-[30%] mx-auto">
            <Lottie animationData={robotAnimation} />
            <p className="text-center text-3xl text-gray-500 mb-10">Not found !</p>
        </div>
    );
};

export default NoItem;