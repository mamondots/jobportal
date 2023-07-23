import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div 
            className="lg:px-20 md:px-16 sm:px-10 px-8 py-8
            flex justify-between items-center">
                 <div>
                    <h2 className="text-xl font-medium cursor-pointer">MAMONDOTS.</h2>
                 </div>
                 <div className='hidden lg:block'>
                     <ul className="flex items-center space-x-8 font-medium nav">
                          <li><a href="">HOME</a></li>
                          <li><a href="">ABOUT</a></li>
                          <li><a href="">BLOG</a></li>
                          <li><a href="">MY PROFILE</a></li>
                          <li><a href="">CONTACT</a></li>
                     </ul>
                 </div>
                 <div className="flex items-center space-x-4 cursor-pointer">
                     <div className='px-4 py-2 bg-[#23C0E9] hover:bg-[#0bc9f9] duration-300 text-white font-medium hidden lg:block'>
                        <h2>JOB POSTER</h2>
                     </div>
                     <div>
                        <button className='px-6 py-2 bg-[#F36969] hover:bg-[#fb3535] duration-300 text-white font-medium'>LOGIN</button>
                     </div>
                 </div>
            </div>
        </div>
    );
};

export default Navbar;