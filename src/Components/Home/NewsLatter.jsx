import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const handleChange = (e) => {
        setEmail(e.target.value);
        setIsValidEmail(true); // Reset validation when user starts typing
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim() === '' || !email.includes('@')) {
            setIsValidEmail(false);
            return;
        }
        console.log('Email submitted:', email);
        setEmail('');
        setIsValidEmail(true);
        setShowSuccessAlert(true);
    };

    return (
        <div className='newsletter-signup w-full py-16 text-white bg-[#000300] px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                        Get the Latest Updates & Exclusive Offers!
                    </h1>
                    <p>Stay in the loop with our newsletter. Don't miss out on:</p>
                    <ul className="list-disc pl-6 mt-4">
                        <li>Exciting updates about our hotel and services.</li>
                        <li>Exclusive deals and discounts for subscribers.</li>
                        <li>Special offers and packages tailored just for you.</li>
                        <li>Helpful travel tips and insights.</li>
                    </ul>
                </div>
                <div className='my-4'>
                    <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input
                            className={`p-3 flex w-full rounded-md text-black ${!isValidEmail ? 'border-red-500' : ''}`}
                            type='email'
                            placeholder='Enter Your Email'
                            value={email}
                            onChange={handleChange}
                        />
                        <button type='submit' className='bg-[#00df9a] text-black rounded-md font-medium w-[300px] ml-4 my-6 px-6 py-3'>
                            Subscribe Now
                        </button>
                    </form>
                    {!isValidEmail && <p className="text-sm text-red-500 mt-2">Please enter a valid email address.</p>}
                    {showSuccessAlert && (
                        <Alert severity="success" icon={<CheckIcon fontSize="inherit" />}>
                            Successfully Submitted
                        </Alert>
                    )}
                    <p className="text-sm mt-2">
                        We value your privacy. Your email address will only be used to send you our newsletter and information about our services. You can unsubscribe at any time.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewsletterSignup;
