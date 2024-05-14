import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignout = () => {
        logOut()
            .then(() => {
                Swal.fire("Successfully Logged out");
            })
            .catch(() => {
                Swal.fire("Error signing out");
            });
    };

    const Navlinks = (
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/rooms'>Rooms</NavLink></li>
            <li><NavLink to='/bookings'>My Bookings</NavLink></li>
            <li><NavLink to='/about'>About Us</NavLink></li>
            <li><NavLink to='/contact'>Contact Us</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Navlinks}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">CozyHaven </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Navlinks}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                {user ? (
                    <>
                        {user.photoURL ? (
                            <div className="relative">
                                <div className="tooltip tooltip-top" data-tip={user.displayName || user.email}>
                                    <div className="avatar">
                                        <div className="w-10 rounded-full ring ring-violet-400 ring-offset-base-100 ring-offset-2">
                                            <img src={user.photoURL} alt="User Avatar" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="avatar">
                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user.photoURL} alt="User Avatar" />
                                </div>
                            </div>
                        )}
                        <button onClick={handleSignout} className="btn bg-violet-400 text-white font-poppins text-sm">Logout</button>
                    </>
                ) : (
                    <Link to="/login">
                        <button className="btn bg-violet-400 text-white font-poppins text-sm">Login</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
