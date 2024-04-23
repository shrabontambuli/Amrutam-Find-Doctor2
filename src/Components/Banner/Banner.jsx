import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen md:pb-10 bg" style={{ backgroundImage: `url("/images/Banner.png")` }}>
                <div className="hero-content">
                    <div className="lg:-ms-[43%]">
                        <p className="text-[#FFF7E2] text-2xl">Namaste, Welcome to Amrutam</p>
                        <h1 className="text-3xl md:text-6xl text-white font-normal mb-8 mt-8 leading-tight">Step into Holistic Healing with <span className="underline underline-offset-2">Ayurveda</span> <br /> Book Consultation with certified Experts.</h1>
                        <p className="text-slate-300">Dive into the world of ayurveda and Experience Personalized Health Solutions and <br /> Holistic Guidance from Trusted Ayurvedic Doctors Anytime, anywhere..</p>
                        <Link to='/booking'>
                            <button className="mt-10 bg-[#3A643B] text-white px-6 py-3 rounded-lg text-xl hover:bg-[#FFF7E2] hover:border-[#3A643B] hover:text-[#3A643B]">Book an Appointment</button>
                        </Link>

                    </div>
                </div>
            </div>
            <div className="bg-[#FFF7E2] py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 justify-items-center items-center lg:container mx-auto gap-5  md:px-0">
                    <div className="flex justify-center items-center border-b-2 lg:border-b-0 lg:border-e-2 px-6 pb-4 md:pb-0">
                        <div className="bg-white rounded-full w-20 h-20 border border-[#3A643B] flex justify-center items-center">
                            <img className="w-10 h-10" src="/icons/sms.svg" alt="" />
                        </div>
                        <h3 className="text-[#3A643B] text-xl ms-5 w-60">convenient online & In-clinic consultations</h3>
                    </div>
                    <div className="flex justify-center items-center border-b-2 lg:border-b-0 lg:border-e-2 px-6 pb-4 md:pb-0">
                        <div className="bg-white rounded-full w-20 h-20 border border-[#3A643B] flex justify-center items-center">
                            <img className="w-10 h-10" src="/icons/shield 1.svg" alt="" />
                        </div>
                        <h3 className="text-[#3A643B] text-xl ms-5 w-60">Safe and effective treatment</h3>
                    </div>
                    <div className="flex justify-center items-center border-b-2 lg:border-b-0 lg:border-e-2 px-6 pb-4 md:pb-0">
                        <div className="bg-white rounded-full w-20 h-20 border border-[#3A643B] flex justify-center items-center">
                            <img className="w-10 h-10" src="/icons/doctor (1) 1.svg" alt="" />
                        </div>
                        <h3 className="text-[#3A643B] text-xl ms-5 w-60">Experienced Ayurvedic Practitioners In-clinic consultations</h3>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="bg-white rounded-full w-20 h-20 border border-[#3A643B] flex justify-center items-center">
                            <img className="w-10 h-10" src="/icons/prescription (1) 1.svg" alt="" />
                        </div>
                        <h3 className="text-[#3A643B] text-xl ms-5 w-60">personalized Treatment Plans & Guidance</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;