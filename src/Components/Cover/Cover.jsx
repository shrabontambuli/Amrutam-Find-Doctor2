import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import img from '../../../public/images/parallax.png'

const Cover = () => {
    return (

        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            strength={-200}
        >
            <div className="hero h-[700px]">
                <div className="hero-overlay bg-opacity-15"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-5xl font-bold text-[#FFF7E2] leading-snug">Ready to restore harmony in your mind, body and spirit?</h1>
                        <Link to='/booking'>
                            <button className="mt-10 bg-[#3A643B] text-white px-6 py-3 rounded-lg text-xl hover:bg-[#FFF7E2] hover:border-[#3A643B] hover:text-[#3A643B]">Book an Appointment</button>
                        </Link>

                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;