import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Swal from 'sweetalert2';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {


    const {signIn , signGoogle , signGithub} = useContext(AuthContext); 
    const location = useLocation(); 
    const [showPassword, setShowPassword] = useState('');
    console.log(location)

    const navigate = useNavigate(); 
    
    const signInWithGitHub = () => {
        signGithub()
        .then(result => {
            console.log(result.user)
            navigate(location?.state ?location.state : '/' )
        })
    
        .catch(error => {
            console.log(error)
        })
    }
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
    
        signIn(email, password)
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Login successfully!'
            }).then(() => {
                navigate(location?.state ? location.state : '/')
            });
        })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Email/Password not correct!'
                });
                console.log(error);
            });
        e.target.reset();
    };
    

   const signInWithGoogle = () => {

    signGoogle()
    .then(() => {
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Login successfully!'
        }).then(() => {
            navigate(location?.state ? location.state : '/')
        });
    })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email/Password not correct!'
            });
            console.log(error);
        });
   }
    return (
        <div data-aos="zoom-in">
            <section>
                <div>
                    <form onSubmit={handleLogin} className="mx-auto mb-20 container border mt-28 border-gray-400 w-full max-w-xl p-8 space-y-6 rounded-md shadow">
                        <h2 className="w-full text-3xl font-bold text-center">Log in!</h2>
                        <div>
                            <label htmlFor="email" className="block mb-1 ml-1">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Your email"
                                name="email"
                                required=""
                                className="block w-full p-2 rounded border border-gray-600 bg-gray-100  dark:bg-gray-100"
                            />
                        </div>
                        <div>
                            <label htmlFor="name" className="block mb-1 ml-1">Password</label>

                            <div className="mb-4 relative">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    required
                                    name="password"
                                    className="block w-full p-2 rounded border border-gray-600 bg-gray-100 dark:bg-gray-100"
                                />
                                <span className="absolute top-3 right-5" onClick={() => { setShowPassword(!showPassword) }}>
                                    {
                                        showPassword ? <FaRegEye /> : <FaRegEyeSlash />
                                    }
                                </span>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-violet-400 dark:bg-violet-600 focus:ring-violet-400 focus:dark:ring-violet-600 hover:ring-violet-400 hover:dark:ring-violet-600 text-black text-white"
                            >
                                LogIn
                            </button>
                        </div>

                        <div className="flex items-center pt-4 space-x-1">
                            <div className="flex-1 h-px sm:w-16 bg-gray-900"></div>
                            <p className="px-3 text-gray-600 font-poppins text-xl">Login with social accounts</p>
                            <div className="flex-1 h-px sm:w-16 bg-gray-900"></div>
                        </div>
                        <div className="flex justify-center space-x-4">
                            <button onClick={signInWithGoogle} className="p-3 rounded-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                </svg>
                            </button>
                            <button onClick={signInWithGitHub}  aria-label="Log in with GitHub" className="p-3 rounded-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                </svg>
                            </button>
                        </div>
                        <p className="text-center sm:px-6 text-gray-600">
                            Dont have an account?
                            <Link to="/registration" className="underline text-blue-800 ml-1">
                                Registration
                            </Link>
                        </p>

                    </form>

                </div >
            </section >
        </div>
    );
};

export default Login;