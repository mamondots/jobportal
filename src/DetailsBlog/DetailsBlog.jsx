import { FaBehance, FaFacebookF, FaInstagram, FaRegCommentDots, FaTwitter } from 'react-icons/fa';
import img from '../assets/img/single_blog_1.png.webp'
import { BiSearch, BiSolidUserVoice } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';

const DetailsBlog = () => {
    return (
        <div className="lg:px-20 md:px-16 sm:px-10 px-8 py-8">
            <h2 className="text-2xl font-bold title">DETAILS THIS BLOG</h2>

            <div className="mt-8">
                    <div className="flex gap-8">
                        <div className="w-full">
                        <div>
                            <img src={img} alt="" />
                        </div>

                        <div className='py-6'>
                            <h2 className='text-2xl font-medium'>Hire The Best Freelancers For Any Job, Online</h2>
                            <div className='flex items-center space-x-6 py-2 cursor-pointer text-[#2626269d]'>
                                <p className='flex items-center gap-2 hover:text-[red] duration-300'><BiSolidUserVoice></BiSolidUserVoice> Travel, Lifestyle</p>
                                <p className='flex items-center gap-2 hover:text-[red] duration-300'><FaRegCommentDots></FaRegCommentDots> 03 Comments</p>
                            </div>

                            <p className='py-4 text-[#2626269d]'>
                            MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower
                            </p>

                            <p className='py-4 text-[#2626269d]'>
                            MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually
                            </p>

                            <p className='py-4 text-[#2626269d] border-l-2 px-8 border-[#262626cf]'>
                            MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.
                            </p>

                            <p className='py-4 mt-4 text-[#2626269d] border-b-2'>
                            MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower
                            </p>

                            <div className='flex items-center justify-between py-4 text-[#2626269d] cursor-pointer border-b-2'>
                                 <div>
                                    <h2 className='flex items-center gap-2 hover:text-[red] duration-300'><AiFillHeart></AiFillHeart>Lily and 4 people like this</h2>
                                 </div>

                                 <div className='flex space-x-3'>
                                    <p className='hover:text-[red] duration-300'><FaFacebookF></FaFacebookF></p>
                                    <p className='hover:text-[red] duration-300'><FaInstagram></FaInstagram></p>
                                    <p className='hover:text-[red] duration-300'><FaTwitter></FaTwitter></p>
                                    <p className='hover:text-[red] duration-300'><FaBehance></FaBehance></p>
                                 </div>
                            </div>

                            <div className='py-12'>
                                <h2 className='text-xl font-semibold'>Leave a Reply</h2>
                                <div className='mt-4'>
                                        <form className='space-y-3'>
                                            <textarea className='w-full border outline-none px-4 py-2' placeholder='Write comment' cols="30" rows="10"></textarea>
                                            <div className='flex space-x-4'>
                                                <input className='w-full border outline-none px-4 py-2' type="text" placeholder='Your Name' />
                                                <input className='w-full border outline-none px-4 py-2' type="email" placeholder='Your Email' />
                                            </div>
                                            <input className='w-full border outline-none px-4 py-2' type="text" placeholder='Website' />
                                            <input className='bg-[#F36969] px-6 py-3 text-white font-medium hover:bg-[#f83333] duration-300 cursor-pointer' type="submit" value="SEND MESSAGE" />
                                        </form>
                                </div>
                            </div>

                        </div>


                        </div>


                        <div className="w-1/3">
                                    <div className='flex flex-col space-y-3'>
                                        <div className='w-full border px-4 py-3 flex items-center justify-between'>
                                        <input className='outline-none'  type="text" placeholder='Search Keyword' />
                                        <p className=''><BiSearch></BiSearch></p>
                                        </div>
                                        <input className='w-full py-3 bg-[#F36969] text-white cursor-pointer font-medium hover:bg-[#f73d3d]' type="submit" value="SEARCH" />
                                    </div>

                            <div className='border mt-8 px-4'>
                                    <h2 className="text-xl font-medium py-4 px-2">Category</h2>
                                    <div className='px-2 space-y-2 pb-4 cursor-pointer text-[#2626269a]'>
                                         <p className='hover:text-[red] duration-300'>Front-End Developer(12)</p>
                                         <p className='hover:text-[red] duration-300'>Back-End Developer(10)</p>
                                         <p className='hover:text-[red] duration-300'>Full-Stack Developer(7)</p>
                                         <p className='hover:text-[red] duration-300'>React Developer(8)</p>
                                         <p className='hover:text-[red] duration-300'>Junior Developer(6)</p>
                                         <p className='hover:text-[red] duration-300'>Mern-Stack Developer(13)</p>
                                    </div>
                            </div>

                            <div className='mt-4'>
                            <h2 className="text-xl font-medium py-4 px-2">Tag Clouds</h2> 
                             <div className='flex gap-3 flex-wrap text-[#2626269a] cursor-pointer'>
                                <p className='px-4 py-1 border hover:bg-[red] hover:text-white duration-300'>project</p>
                                <p className='px-4 py-1 border hover:bg-[red] hover:text-white duration-300'>love</p>
                                <p className='px-4 py-1 border hover:bg-[red] hover:text-white duration-300'>technology</p>
                                <p className='px-4 py-1 border hover:bg-[red] hover:text-white duration-300'>travel</p>
                                <p className='px-4 py-1 border hover:bg-[red] hover:text-white duration-300'>restaurant</p>
                                <p className='px-4 py-1 border hover:bg-[red] hover:text-white duration-300'>life style</p>
                                <p className='px-4 py-1 border hover:bg-[red] hover:text-white duration-300'>design</p>
                             </div>
                            </div>

                        </div>
                    </div>
            </div>
        </div>
    );
};

export default DetailsBlog;