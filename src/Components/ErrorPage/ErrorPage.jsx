import { Link } from 'react-router-dom';
import errorVideo from '../../assets/Driibbble - 404 Page.mp4';

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <Link to='/' className='flex items-center justify-center'>
                <video className='w-[1200px]' autoPlay loop muted>
                    <source src={errorVideo} type="video/mp4" />
                </video>
            </Link>
        </div>
    );
};

export default ErrorPage;
