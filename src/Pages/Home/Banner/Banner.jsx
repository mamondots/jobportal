import { AiOutlineSearch } from 'react-icons/ai';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/xCdL611/banner02.jpg)' }}>
                <div className="hero-overlay bg-opacity-60 bg-[#262626]"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl ">
                        <h1 className="text-6xl font-bold leading-tight">We Offer 
                        <span className="text-[#F36969]"> 25K+ Job</span> Vacancies Right Now
                        </h1>
                        <p className="text-lg font-medium py-1">Find Jobs, Employment & Career Opportunities</p>
                        <p className="mb-5">
                            There are many variations of passages of Lorem Ipsum Fasts
                            by injected humour, or randomised words which...
                        </p>
                        <div className='bg-[#191A28] py-8 px-10 w-[136vh] ml-[-12vh] mt-[12vh] cursor-pointer'>
                              <form className='flex items-center space-x-4'>
                                  <div className=''>
                                  <input className='w-[40vh] py-2 px-4 rounded bg-transparent border text-[#bfbfbf] border-[#bfbfbf]' type="text" name="" placeholder="What are you looking" />
                                  </div>
                                  <div>
                                       <select className='w-[30vh] py-2 px-2 rounded bg-transparent border text-[#bfbfbf] 
                                       border-[#bfbfbf]'>
                                         <option className='bg-transparent'>Category</option>
                                         <option>Dhaka</option>
                                         <option>Mirpur</option>
                                         <option>Uttara</option>
                                         <option>Comilla</option>
                                         <option>Brahmanbaria</option>
                                         <option>Sylet</option>
                                       </select>
                                  </div>

                                  <div>
                                       <select className='w-[30vh] py-2 px-2 rounded bg-transparent border text-[#bfbfbf] border-[#bfbfbf]'>
                                         <option>Location</option>
                                         <option>Dhaka</option>
                                         <option>Mirpur</option>
                                         <option>Uttara</option>
                                         <option>Comilla</option>
                                         <option>Brahmanbaria</option>
                                         <option>Sylet</option>
                                       </select>
                                  </div>
                                 <div className='flex items-center bg-[#F36969] text-white font-medium py-2 px-4 cursor-pointer hover:bg-[#f81010] duration-300'>
                                    <p className='mr-2'><AiOutlineSearch></AiOutlineSearch></p>
                                    <input type="submit" value="SEARCH" />
                                 </div>
                              </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;