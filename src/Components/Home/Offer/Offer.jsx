import { useEffect } from 'react';
import './Offer.css'

const Offer = () => {
    useEffect(() => {
        const handleClick = () => {
            document.getElementById('my_modal_2').showModal();
        };
        handleClick();
    }, []); // Empty dependency array means this effect runs once after initial render

    return (
        <div>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box offer h-1/2">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn bg-yellow-200 btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className='absolute top-[35%] left-14 md:left-20'>
                        <h3 className="font-bold text-white text-3xl">Standard Single Room</h3>
                        <p className="py-4 text-3xl text-white">Only for Price per night <span className='text-green-400'>$60</span></p>
                    </div>
                </div>

            </dialog>
        </div>
    );
};

export default Offer;
