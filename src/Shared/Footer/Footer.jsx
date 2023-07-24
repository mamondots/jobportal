import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn,FaGooglePlay,FaPhoneAlt } from 'react-icons/fa';
import { AiFillApple,AiFillWindows } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <div className='lg:px-20 md:px-16 sm:px-10 px-8 py-16 bg-[#282828]'>
            <div className='flex items-center justify-between flex-wrap lg:space-y-0 md:space-y-0 sm:space-y-0 space-y-2 text-white'>
                <div>
                    <h2 className='text-2xl font-semibold'>MAMONDOTS</h2>
                    <p className='py-2 text-[#b1b1b1] w-60'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu doloremque laudantium</p>
                    <div className='flex items-center space-x-2 text-[#b1b1b1] cursor-pointer py-2'>
                        <p className='hover:text-[#F36969] duration-500'><FaFacebookF></FaFacebookF></p>
                        <p className='hover:text-[#F36969] duration-500'><FaInstagram></FaInstagram></p>
                        <p className='hover:text-[#F36969] duration-500'><FaTwitter></FaTwitter></p>
                        <p className='hover:text-[#F36969] duration-500'><FaLinkedinIn></FaLinkedinIn></p>
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl font-semibold'>Useful Link</h2>
                    <ul className='py-2 text-[#b1b1b1] space-y-1'>
                        <li className=' hover:text-white duration-300'><a href="">About Us</a></li>
                        <li className=' hover:text-white duration-300'><a href="">Services</a></li>
                        <li className=' hover:text-white duration-300'><a href="">Browse Jobs</a></li>
                        <li className=' hover:text-white duration-300'><a href="">Candidates</a></li>
                        <li className=' hover:text-white duration-300'><a href="">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                <h2 className='text-2xl font-semibold'>Download</h2>
                    <ul className='py-2 text-[#b1b1b1] space-y-1'>
                        <li  className=' hover:text-white duration-300'><a className='flex items-center' href=""><AiFillApple></AiFillApple><span className='px-1'>App Store</span></a></li>
                        <li  className=' hover:text-white duration-300'><a className='flex items-center' href=""><FaGooglePlay></FaGooglePlay><span className='px-1'>Google Play</span></a></li>
                        <li  className=' hover:text-white duration-300'><a className='flex items-center' href=""><AiFillWindows></AiFillWindows><span className='px-1'>Windows</span></a></li>
                        <li  className=' hover:text-white duration-300'><a className='flex items-center' href=""><AiFillWindows></AiFillWindows><span className='px-1'>Windows</span></a></li>
                        <li  className=' hover:text-white duration-300'><a className='flex items-center' href=""><AiFillWindows></AiFillWindows><span className='px-1'>Windows</span></a></li>
                    </ul>
                </div>
                <div>
                <h2  className='text-2xl font-semibold'>Contact</h2>
                    <ul  className='py-2 text-[#b1b1b1] space-y-1'>
                        <li  className=' hover:text-white duration-300'><a className='flex items-center' href=""><FaPhoneAlt></FaPhoneAlt><span>+8801646286477</span></a></li>
                        <li  className=' hover:text-white duration-300'><a className='flex items-center' href=""><FaPhoneAlt></FaPhoneAlt><span>+8801646286477</span></a></li>
                        <li  className=' hover:text-white duration-300'><a className='flex items-center' href=""><FaPhoneAlt></FaPhoneAlt><span>+8801646286477</span></a></li>
                        <li  className=' hover:text-white duration-300'><a className='flex items-center' href=""><MdEmail></MdEmail><span>mamonrabin@gmail.com</span></a></li>
                        <li  className=' hover:text-white duration-300'><a className='flex items-center' href=""><MdEmail></MdEmail><span>almamonrabin@gmail.com</span></a></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;