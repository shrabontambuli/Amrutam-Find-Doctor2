

const FirstContent = () => {
    return (
        <div className="container mx-auto py-10">
            <div className="text-center mt-14">
                <h2 className="text-4xl text-[#3A643B] underline font-bold">Discover Ayurveda’s magic with us</h2>
                <p className="text-[#666666] mt-10">Ayurvedic treatment aims to balance your body and mind, bringing harmony <br /> and vitality. It is like a journey to better health using ancient wisdom,
                    <br /> a totally effective approach for a better life.</p>
            </div>
            <div className="mt-10 lg:mt-24">
                <div className="lg:absolute left-[42%] -bottom-[100%]">
                    <img className="w-80 mx-auto" src="/images/First-content.png" alt="" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-12 relative">
                    <div className="flex items-center text-right border-2  lg:border-0 p-2 lg:p-0 rounded-lg">
                        <div>
                            <h3 className="font-medium text-xl">Personalized Wellness</h3>
                            <p className="text-base w-64">Get treatments made just for you based on your individual doshas ( body type)</p>
                        </div>
                        <div className="flex justify-center items-center bg-[#EDF5FA] rounded-full w-24 h-24 ms-4">
                            <img className="w-14 h-14" src="/icons/heartbeat (1) 1.png" alt="" />
                        </div>
                    </div>
                    <div className="flex items-center border-2  lg:border-0 p-2 lg:p-0 rounded-lg">
                        <div className="flex justify-center items-center bg-[#F5F3FC] rounded-full w-24 h-24">
                            <img className="w-14 h-14" src="/icons/protection 1.png" alt="" />
                        </div>
                        <div className="ms-4">
                            <h3 className="font-medium text-xl">Holistic Healing</h3>
                            <p className="text-base w-64">Fix the root problem for long-lasting health.</p>
                        </div>
                    </div>
                    <div className="flex items-center text-right lg:me-32 border-2  lg:border-0 p-2 lg:p-0 rounded-lg">
                        <div>
                            <h3 className="font-medium text-xl">Focus on prevention</h3>
                            <p className="text-base w-64">Stop problems even before they start.</p>
                        </div>
                        <div className="flex justify-center items-center bg-[#EAF2EA] rounded-full w-24 h-24 ms-4">
                            <img className="w-14 h-14" src="/icons/ribbon 1.png" alt="" />
                        </div>
                    </div>
                    <div className="flex items-center lg:ms-32 border-2  lg:border-0 p-2 lg:p-0 rounded-lg">
                        <div className="flex justify-center items-center bg-[#FEF6ED] rounded-full w-24 h-24">
                            <img className="w-14 h-14" src="/icons/ayurveda 1.png" alt="" />
                        </div>
                        <div className="ms-4">
                            <h3 className="font-medium text-xl">Natural Remedies</h3>
                            <p className="text-base w-64">Using herbs and natural therapies for healing.</p>
                        </div>
                    </div>
                    <div className="flex items-center text-right border-2  lg:border-0 p-2 lg:p-0 rounded-lg">
                        <div>
                            <h3 className="font-medium text-xl">Mind-Body Connection</h3>
                            <p className="text-base w-64">Keep your mind and body in sync for a happy life.</p>
                        </div>
                        <div className="flex justify-center items-center bg-[#FCF1F1] rounded-full w-24 h-24 ms-4">
                            <img className="w-14 h-14" src="/icons/lotus-position 1.png" alt="" />
                        </div>
                    </div>
                    <div className="flex items-center border-2  lg:border-0 p-2 lg:p-0 rounded-lg">
                        <div className="flex justify-center items-center bg-[#EAF2EA] rounded-full w-24 h-24">
                            <img className="w-14 h-14" src="/icons/strong 1.png" alt="" />
                        </div>
                        <div className="ms-4">
                            <h3 className="font-medium text-xl">Holistic Healing</h3>
                            <p className="text-base w-64">Fix the root problem for long-lasting health.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstContent;