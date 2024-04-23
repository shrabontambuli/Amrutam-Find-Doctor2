import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Stories = () => {

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
        <div className="bg-[#FFF7E2] py-10">
            <div className="text-center mt-10">
                <h2 className="text-4xl text-[#3A643B] underline font-bold">STORIES FROM OUR VALUED CUSTOMERS!</h2>
            </div>
            <Carousel
                infinite={true}
                autoPlay={true}
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                responsive={responsive}
                className="container mx-auto mt-24">
                <div className=" bg-white rounded-2xl h-96 mx-3 shadow">
                    <div className="bg-[#ECFEE7] hover:bg-[#ECE7FF] p-6 rounded-t-2xl">
                        <h1 className="text-lg font-semibold">Consulted for Skin</h1>
                    </div>
                    <div className="mt-6 px-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="rounded-full w-16 h-16">
                                    <img className="rounded-full w-16 h-16" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                </div>
                                <div className="ms-4">
                                    <h1 className="text-lg font-medium">Sophie Moore</h1>
                                    <p>Chennai</p>
                                </div>
                            </div>
                            <div>
                                <h1 className="-mt-5">17/02/24</h1>
                            </div>
                        </div>
                        <div className="rating mt-5">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                        </div>
                        <h1 className="text-xl text-[#3A643B] font-semibold mt-3">“One of a kind service”</h1>
                        <p className="mt-4 text-[#414141] w-80">Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
                    </div>
                </div>
                <div className=" bg-white rounded-2xl h-96 mx-3 shadow">
                    <div className="bg-[#ECFEE7] hover:bg-[#ECE7FF] p-6 rounded-t-2xl">
                        <h1 className="text-lg font-semibold">Consulted for hair</h1>
                    </div>
                    <div className="mt-6 px-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="rounded-full w-16 h-16">
                                    <img className="rounded-full w-16 h-16" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                </div>
                                <div className="ms-4">
                                    <h1 className="text-lg font-medium">Sophie Moore</h1>
                                    <p>Mumbai</p>
                                </div>
                            </div>
                            <div>
                                <h1 className="-mt-5">17/02/24</h1>
                            </div>
                        </div>
                        <div className="rating mt-5">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                        </div>
                        <h1 className="text-xl text-[#3A643B] font-semibold mt-3">“One of a kind service”</h1>
                        <p className="mt-4 text-[#414141] w-80">Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
                    </div>
                </div>
                <div className=" bg-white rounded-2xl h-96 mx-3 shadow">
                    <div className="bg-[#ECFEE7] hover:bg-[#ECE7FF] p-6 rounded-t-2xl">
                        <h1 className="text-lg font-semibold">Consulted for hair</h1>
                    </div>
                    <div className="mt-6 px-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="rounded-full w-16 h-16">
                                    <img className="rounded-full w-16 h-16" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                </div>
                                <div className="ms-4">
                                    <h1 className="text-lg font-medium">Sophie Moore</h1>
                                    <p>Chennai</p>
                                </div>
                            </div>
                            <div>
                                <h1 className="-mt-5">17/02/24</h1>
                            </div>
                        </div>
                        <div className="rating mt-5">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                        </div>
                        <h1 className="text-xl text-[#3A643B] font-semibold mt-3">“One of a kind service”</h1>
                        <p className="mt-4 text-[#414141] w-80">Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
                    </div>
                </div>
            </Carousel>;
        </div>
    );
};

export default Stories;