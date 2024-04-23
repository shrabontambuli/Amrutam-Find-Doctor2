import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SecondContent = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
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
        <div className="pb-20">
            <div className="text-center mt-14">
                <h2 className="text-4xl text-[#3A643B] underline font-bold">Our ayurvedic approach</h2>
                <p className="text-[#666666] mt-10">At Amrutam we follow a unique and personalized approach to healing. Our expert <br /> practitioners begin each treatment process by conducting a thorough analysis of the <br /> patient’s body type, medical history, and current health conditions.</p>
            </div>

            {/* Carousel */}

            <Carousel
                infinite={true}
                removeArrowOnDeviceType={["tablet", "desktop"]}
                responsive={responsive}
                className="container mx-auto mt-24">
                <div className=" bg-[#FFF7E2] rounded-xl border-t-4 border-[#3A643B] text-center p-8 h-96 mx-3 shadow">
                    <div className="rounded-full w-20 h-20 bg-[#3A643B] flex justify-center items-center mx-auto mt-5">
                        <img src="/images/1.png" alt="" />
                    </div>
                    <h1 className="text-xl text-[#3A643B] font-semibold mt-6">Make Appointment</h1>
                    <p className="mt-5 text-[#414141]">Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs</p>
                </div>
                <div className=" bg-[#FFF7E2] rounded-xl border-t-4 border-[#3A643B] text-center p-8 mx-3 h-96 shadow">
                    <div className="rounded-full w-20 h-20 bg-[#3A643B] flex justify-center items-center mx-auto mt-5">
                        <img src="/images/2.png" alt="" />
                    </div>
                    <h1 className="text-xl text-[#3A643B] font-semibold mt-6">Consultations</h1>
                    <p className="mt-5 text-[#414141]">The next stage involves a thorough consultation with an Ayurveda practitioner.</p>
                </div>
                <div className=" bg-[#FFF7E2] rounded-xl border-t-4 border-[#3A643B] text-center p-8 mx-3 h-96 shadow">
                    <div className="rounded-full w-20 h-20 bg-[#3A643B] flex justify-center items-center mx-auto mt-5">
                        <img src="/images/3.png" alt="" />
                    </div>
                    <h1 className="text-xl text-[#3A643B] font-semibold mt-6">Treatment Planning</h1>
                    <p className="mt-5 text-[#414141]">The Ayurvedic practitioner creates a personalized treatment plan for you</p>
                </div>
                <div className=" bg-[#FFF7E2] rounded-xl border-t-4 border-[#3A643B] text-center p-8 mx-3 h-96 shadow">
                    <div className="rounded-full w-20 h-20 bg-[#3A643B] flex justify-center items-center mx-auto mt-5">
                        <img src="/images/4.png" alt="" />
                    </div>
                    <h1 className="text-xl text-[#3A643B] font-semibold mt-6">Maintenance</h1>
                    <p className="mt-5 text-[#414141]">These visits allow for assessment of progress, adjustments to the treatment.</p>
                </div>
            </Carousel>;
        </div>
    );
};

export default SecondContent;