import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="bg-[#FFF7E2] min-h-screen  grid grid-cols-1 md:grid-cols-2  items-center justify-items-center px-10 lg:px-32 text-center">
            <div>
                <img className="w-full" src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png" alt="" />
            </div>
            <div className="font-serif text-4xl">
                <h1>Page Not Found....</h1>
                <Link to='/' className="mt-6 btn bg-[#3A643B] text-white hover:bg-[#FFF7E2] hover:border-[#3A643B] hover:text-[#3A643B]">Go To Home</Link>
            </div>
        </div>
    );
};

export default Error;