import { Link } from 'react-router-dom';
import Logo from '/images/Logo.png'

const Navbar = () => {

    const navOptions =
        <>
            <li className='px-6 hover:text-[#3A643B]'><Link to="/">Home</Link></li>
            <li className='px-6 hover:text-[#3A643B]'><Link to="/doctors">find doctors</Link></li>
            <li className='px-6 hover:text-[#3A643B]'><Link to="/about">About Us</Link></li>
        </>

    return (
        <>
            <div className="navbar bg-[#FFF7E2] font-semibold text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn bg-[#FFF7E2] border-none shadow-none lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#3A643B"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-3 shadow rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <p className="lg:ms-36 lg:text-2xl ms-3 "><img src={Logo} alt="" /></p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-lg">
                        {navOptions}
                    </ul>
                </div>

                <div className="navbar-end lg:me-36">
                    {/* <img className="w-16 h-16 rounded-full" alt="" /> */}
                    <Link to="/login"><button className='btn bg-[#FFF7E2] text-md text-[#3A643B] border border-[#3A643B] hover:bg-[#3A643B] hover:text-white'>Login</button></Link>
                    <Link to="/signIn"><button className='btn text-white text-md bg-[#3A643B] ms-4 lg:ms-4 hover:bg-[#FFF7E2] hover:border-[#3A643B] hover:text-[#3A643B] '>Sing-Up</button></Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;