import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const Experts = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="py-10">
            <div className="text-center mt-10">
                <h2 className="text-4xl text-[#3A643B] underline font-bold">Meet our Ayurveda experts</h2>
            </div>
            <Carousel
                infinite={true}
                // autoPlay={true}
                responsive={responsive}
                className="container mx-auto mt-24">
                <div className="bg-[#FFF7E2] rounded-[40px] w-10/12 h-[470px] mx-auto shadow text-center">
                    <div className="mt-6 p-6">
                        <div className="rounded-full mx-auto w-32 h-32">
                            <img className="rounded-full w-32 h-32 absolute" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <button className="btn bg-black rounded-3xl text-white relative top-24">
                                4.5
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                                </div>
                            </button>
                        </div>
                        <h1 className="text-xl font-bold mt-14">Dr. Vaishali sharma</h1>
                        <p className="mt-2 text-[#414141] w-80 mx-auto">Ayurveda Practitioner (BAMS, MD)</p>
                        <h2 className="flex justify-center items-center mt-2 font-medium"><img className="me-2" src="/icons/gra.png" alt="" />25 years of experience</h2>
                        <h2 className="flex justify-center items-center bg2 w-40 mx-auto rounded-3xl p-2 mt-3 text-[#3A643B]"><img className="me-2" src="/icons/cap.png" alt="" />Skin Specialist</h2>
                    </div>
                    <div className="bg-[#3A643B] p-4 rounded-b-[40px] relative -bottom-9">
                        <Link to='/booking'>
                            <button className="text-white font-semibold">Book a session</button>
                        </Link>
                    </div>
                </div>
                <div className="bg-[#FFF7E2] rounded-[40px] w-10/12 h-[470px] mx-auto shadow text-center">
                    <div className="mt-6 p-6">
                        <div className="rounded-full mx-auto w-32 h-32">
                            <img className="rounded-full w-32 h-32 absolute" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <button className="btn bg-black rounded-3xl text-white relative top-24">
                                4.5
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                                </div>
                            </button>
                        </div>
                        <h1 className="text-xl font-bold mt-14">Dr. Vaishali sharma</h1>
                        <p className="mt-2 text-[#414141] w-80 mx-auto">Ayurveda Practitioner (BAMS, MD)</p>
                        <h2 className="flex justify-center items-center mt-2 font-medium"><img className="me-2" src="/icons/gra.png" alt="" />25 years of experience</h2>
                        <h2 className="flex justify-center items-center bg2 w-40 mx-auto rounded-3xl p-2 mt-3 text-[#3A643B]"><img className="me-2" src="/icons/cap.png" alt="" />Skin Specialist</h2>
                    </div>
                    <div className="bg-[#3A643B] p-4 rounded-b-[40px] relative -bottom-9">
                        <Link to='/booking'>
                            <button className="text-white font-semibold">Book a session</button>
                        </Link>
                    </div>
                </div>
                <div className="bg-[#FFF7E2] rounded-[40px] w-10/12 h-[470px] mx-auto shadow text-center">
                    <div className="mt-6 p-6">
                        <div className="rounded-full mx-auto w-32 h-32">
                            <img className="rounded-full w-32 h-32 absolute" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <button className="btn bg-black rounded-3xl text-white relative top-24">
                                4.5
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                                </div>
                            </button>
                        </div>
                        <h1 className="text-xl font-bold mt-14">Dr. Vaishali sharma</h1>
                        <p className="mt-2 text-[#414141] w-80 mx-auto">Ayurveda Practitioner (BAMS, MD)</p>
                        <h2 className="flex justify-center items-center mt-2 font-medium"><img className="me-2" src="/icons/gra.png" alt="" />25 years of experience</h2>
                        <h2 className="flex justify-center items-center bg2 w-40 mx-auto rounded-3xl p-2 mt-3 text-[#3A643B]"><img className="me-2" src="/icons/cap.png" alt="" />Skin Specialist</h2>
                    </div>
                    <div className="bg-[#3A643B] p-4 rounded-b-[40px] relative -bottom-9">
                        <Link to='/booking'>
                            <button className="text-white font-semibold">Book a session</button>
                        </Link>
                    </div>
                </div>
            </Carousel>;
            <div className="w-52 mx-auto mt-10">
                <h1 className="text-[#3A643B] rounded-lg font-medium flex justify-center items-center bg2 p-4">Find more experts <img className="ms-2" src="/icons/chevron-right.png" alt="" /></h1>
            </div>
        </div>
    );
};

export default Experts;