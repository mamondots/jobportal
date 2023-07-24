import { AiOutlineSearch } from 'react-icons/ai';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/xCdL611/banner02.jpg)' }}>
                <div className="hero-overlay bg-opacity-60 bg-[#262626]"></div>
                <div className="hero-content text-center text-neutral-content mt-[-20vh]">
                    <div className="max-w-2xl ">
                        <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold leading-tight">We Offer 
                        <span className="text-[#F36969]"> 25K+ Job</span> Vacancies Right Now
                        </h1>
                        <p className="text-lg font-medium py-4">Find Jobs, Employment & Career Opportunities</p>
                        <p className="mb-5">
                            There are many variations of passages of Lorem Ipsum Fasts
                            by injected humour, or randomised words which...
                        </p>
                    </div>
                </div>
                <div className='hidden lg:block md:block'>
                <div className='bg-[#26262659] rounded py-4 px-8 mt-64'>
                    <div className='flex items-center space-x-4'>
                         <div>
                            <input className='px-2 py-2 bg-transparent border outline-none rounded text-[#b3b3b3]' type="text" placeholder='Job title' />
                         </div>
                         <div>
                            <select className='px-2 py-2 bg-transparent border outline-none rounded text-[#b3b3b3]'>
                                <option>Choose Job Category</option>
                                <option>Front-End Developer</option>
                                <option>Back-End Developer</option>
                                <option>Full Stack Developer</option>
                                <option>Web Developer</option>
                            </select>
                         </div>
                         <div>
                         <select className='px-2 py-2 bg-transparent border outline-none rounded text-[#b3b3b3]'>
                                <option>Choose Country</option>
                                <option>Bangladesh</option>
                                <option>India</option>
                                <option>Japan</option>
                                <option>London</option>
                            </select>
                         </div>
                         <div>
                            <button className='px-6 py-2 text-white font-medium rounded bg-[#F36969] hover:bg-[#fa1010] duration-500'>Search</button>
                         </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;