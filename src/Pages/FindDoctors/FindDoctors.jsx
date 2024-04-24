import Expert from "../../Components/Experts/Experts"
const FindDoctors = () => {
    return (
        <div>
            <div className="hero-image">
                <div className="flex justify-center items-center h-full">
                    <div>
                        <h1 className="text-4xl font-medium">Find expert Doctors for an In-clinic session here</h1>
                        <div className="flex justify-center mt-10">
                            <select className="select select-bordered w-56 max-w-xs">
                                <option disabled selected>Select Location</option>
                                <option>Mumbai</option>
                                <option>Chennai</option>
                            </select>
                            <label className="input input-bordered w-96 flex items-center gap-2 ms-3">
                                <input type="text" className="grow" placeholder="eg. Doctor, specialisation, clinic name" />
                                <img src=" /icons/arrow_forward_24px.png" alt="" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="border-b-2 py-6">
                    <div className="grid grid-cols-5 justify-items-center items-center">
                        <div className="dropdown w-40">
                            <div tabIndex={0} role="button" className="btn m-1 flex items-center justify-between">Expertise <img src="/icons/down.png" alt="" /></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                        <div className="dropdown w-40">
                            <div tabIndex={0} role="button" className="btn m-1 flex items-center justify-between">Gender <img src="/icons/down.png" alt="" /></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Male</a></li>
                                <li><a>Female</a></li>
                                <li><a>Custom</a></li>
                            </ul>
                        </div>
                        <div className="dropdown w-40">
                            <div tabIndex={0} role="button" className="btn m-1 flex items-center justify-between">Fees <img src="/icons/down.png" alt="" /></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>500</a></li>
                                <li><a>1000</a></li>
                            </ul>
                        </div>
                        <div className="dropdown w-40">
                            <div tabIndex={0} role="button" className="btn m-1 flex items-center justify-between">Languages <img src="/icons/down.png" alt="" /></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Hindi</a></li>
                                <li><a>Bangla</a></li>
                                <li><a>English</a></li>
                            </ul>
                        </div>
                        <div className="dropdown w-40">
                            <div tabIndex={0} role="button" className="btn bg-[#DCEEDC] m-1 flex items-center justify-between">All filters <img src="/icons/down.png" alt="" /></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-end mt-20">
                    <div className="flex justify-between items-center bg-[#EAF2EA] px-5 py-3 rounded-3xl w-40">
                        <h3>Hair care </h3>
                        <button><img src="/icons/x-btn.png" alt="" /></button>
                    </div>
                    <div className="flex justify-between items-center bg-[#EAF2EA] px-5 py-3 rounded-3xl w-40 ms-6">
                        <h3>Female </h3>
                        <button><img src="/icons/x-btn.png" alt="" /></button>
                    </div>
                    <div className="flex justify-between items-center bg-[#EAF2EA] px-5 py-3 rounded-3xl w-40 ms-6">
                        <h3>Rs.0-Rs.500</h3>
                        <button><img src="/icons/x-btn.png" alt="" /></button>
                    </div>
                    <div className="flex justify-between items-center bg-[#EAF2EA] px-5 py-3 rounded-3xl w-40 ms-6">
                        <h3>Hindi</h3>
                        <button><img src="/icons/x-btn.png" alt="" /></button>
                    </div>
                </div>
            </div>

            <Expert />
        </div>
    );
};

export default FindDoctors;