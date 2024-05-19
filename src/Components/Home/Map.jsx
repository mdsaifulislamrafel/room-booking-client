import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Map = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className="mt-9 w-full">
            <h1 className="text-3xl mb-5 text-center uppercase bg-300% font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">You Can Find Us Here</h1>
            <div className="w-full h-[450px] mb-5 mx-auto ">
        <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1852586.262385163!2d88.12156477500001!3d24.920738915958676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1712605663504!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: 0, width: "100%"}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
        </div>
    );
};

export default Map;