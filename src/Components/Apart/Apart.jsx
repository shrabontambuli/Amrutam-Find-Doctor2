

const Apart = () => {
    return (
        <div className="bg-[#FFF7E2] mt-10 pb-20">
            <div className="text-center pt-14">
                <h2 className="text-4xl text-[#3A643B] underline font-bold">What sets Ayurvedic consultations apart?</h2>
            </div>
            <div className="mt-20 container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 justify-items-center items-center gap-5">
                    <div className="lg:col-span-2 bg-white rounded-xl border-t-4 border-[#3A643B] text-center p-10 h-60 shadow">
                        <h1 className="text-2xl text-[#3A643B] font-semibold">स्वस्थस्य स्वास्थ्य रक्षणं, <br /> आतुरस्य विकार प्रशमनं ।</h1>
                        <p className="mt-4 text-[#3A643B]">[ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]</p>
                    </div>
                    <div className=" bg-white rounded-xl border-t-4 border-[#3A643B] w-full h-60 shadow">
                        <img className="w-full h-full rounded-xl" src="/images/apart-1.png" alt="" />
                    </div>
                    <div className=" bg-white rounded-xl border-t-4 border-[#3A643B] text-center p-10 h-60 shadow">
                        <h1 className="text-2xl text-[#3A643B] font-semibold">Precise diagnosis</h1>
                        <p className="mt-4 text-[#414141]">Ayurveda is core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment.</p>
                    </div>
                    <div className=" bg-white rounded-xl border-t-4 border-[#3A643B] text-center p-10 h-60 shadow">
                        <h1 className="text-2xl text-[#3A643B] font-semibold">Zero side-effects</h1>
                        <p className="mt-4 text-[#414141]">Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs</p>
                    </div>
                    <div className=" bg-white rounded-xl border-t-4 border-[#3A643B] text-center w-full h-60 shadow">
                        <img className="w-full h-full rounded-xl" src="/images/apart-2.png" alt="" />
                    </div>
                    <div className=" bg-white rounded-xl border-t-4 border-[#3A643B] text-center p-10 h-60 shadow">
                        <h1 className="text-2xl text-[#3A643B] font-semibold">Individual Treatment</h1>
                        <p className="mt-4 text-[#414141]">all Treatments are personalized based on a person is unique constitution and health concerns.</p>
                    </div>
                    <div className=" bg-white rounded-xl border-t-4 border-[#3A643B] text-center w-full h-60 shadow">
                        <img className="w-full h-full rounded-xl" src="/images/apart-3.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Apart;