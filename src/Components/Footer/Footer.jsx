

const Footer = () => {
    return (
        <footer className="footer justify-items-center p-10 bg2 text-base-content">
            <nav>
                <h6 className="footer-title text-[#3A643B]">Get in touch</h6>
                <a className="link link-hover">support@amrutam.co.in</a>
                <a className="link link-hover">Amrutam Pharmaceuticals Pvt Ltd., <br /> chitragupt ganj, Nai Sadak, Lashkar, <br /> Gwalior - 474001</a>
                <a className="link link-hover mt-4 font-medium">+91 9713171999</a>
                <div className="flex items-center mt-4">
                    <a className="link link-hover md:me-2"><img src="/icons/fb.png" alt="" /></a>
                    <a className="link link-hover md:me-2"><img src="/icons/Insta.png" alt="" /></a>
                    <a className="link link-hover md:me-2"><img src="/icons/You.png" alt="" /></a>
                    <a className="link link-hover md:me-2"><img src="/icons/Twi.png" alt="" /></a>
                    <a className="link link-hover md:me-2"><img src="/icons/Link.png" alt="" /></a>
                    <a className="link link-hover md:me-2"><img src="/icons/Print.png" alt="" /></a>
                </div>
            </nav>
            <nav>
                <h6 className="footer-title text-[#3A643B]">Information</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Terms and Conditions</a>
                <a className="link link-hover">Privacy Policy</a>
                <a className="link link-hover">Privacy Policy for Mobile Apps</a>
                <a className="link link-hover">Shipping and Returns Policy</a>
                <a className="link link-hover">International Delivery</a>
                <a className="link link-hover"> For Businesses, Hotels and Resorts</a>
            </nav>
            <form>
                <h6 className="footer-title text-[#3A643B]">Subscribe to our Newsletter and join Amrutam Family today!</h6>
                <fieldset className="form-control w-80">
                    <div className="join rounded-3xl">
                        <input type="text" placeholder="Your Email Address" className="input input-bordered join-item bg2" />
                        <button className="btn btn-neutral join-item">Subscribe</button>
                    </div>
                </fieldset>
            </form>
        </footer>
    );
};

export default Footer;