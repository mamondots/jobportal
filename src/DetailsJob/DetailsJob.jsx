import img from '../assets/img/c8.jpg'

import { BsRecordCircle } from 'react-icons/bs';

const DetailsJob = () => {
    return (
        <div className="lg:px-20 md:px-16 sm:px-10 px-8 py-8 bg-[#F9F9F9]">
            <h2 className="text-2xl font-bold title">DETAILS THIS JOBS</h2>

            <div className='flex gap-6 mt-12'>
                <div className='w-full'>
                    <div className='flex  space-x-8'>
                        <div className='border border-[#23c1e967] px-2 py-2'>
                            <img src={img} alt="" />
                        </div>
                        <div className='cursor-pointer'>
                            <h2 className='text-2xl font-medium py-2'>Front-End Developer</h2>
                            <div className='flex items-center space-x-12 text-[#2626268a]'>
                                <p>Creative Agency</p>
                                <p>Athens, Greece</p>
                                <p> $3500 - $4000</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='py-4 mt-4'>
                            <h2 className='text-xl font-medium py-2'>Job Description</h2>
                            <p className='text-[#2626268b]'>
                                It is a long established fact that a reader will beff distracted by vbthe creadable content of a page when looking at its layout. The pointf of using Lorem Ipsum is that it has ahf mcore or-lgess normal distribution of letters, as opposed to using, Content here content here making it look like readable.
                            </p>
                        </div>

                        <div>
                            <h2 className='text-xl font-medium py-3'>Required Knowledge, Skills, and Abilities</h2>
                            <ul className='space-y-1 py-2 text-[#262626b5]'>
                                <li className='flex items-center gap-2'><BsRecordCircle></BsRecordCircle>System Software Development</li>
                                <li className='flex items-center gap-2'><BsRecordCircle></BsRecordCircle>Mobile Applicationin iOS/Android/Tizen or other platform</li>
                                <li className='flex items-center gap-2'><BsRecordCircle></BsRecordCircle>Research and code , libraries, APIs and frameworks</li>
                                <li className='flex items-center gap-2'><BsRecordCircle></BsRecordCircle>Strong knowledge on software development life cycle</li>
                                <li className='flex items-center gap-2'><BsRecordCircle></BsRecordCircle>Strong problem solving and debugging skills</li>
                            </ul>
                        </div>

                        <div className='mt-4'>
                            <h2 className='text-xl font-medium py-3'>Education + Experience</h2>
                            <ul className='space-y-1 py-2 text-[#262626b5]'>
                                <li className='flex items-center gap-2'><BsRecordCircle></BsRecordCircle>3 or more years of professional design experience</li>
                                <li className='flex items-center gap-2'><BsRecordCircle></BsRecordCircle>Direct response email experience</li>
                                <li className='flex items-center gap-2'><BsRecordCircle></BsRecordCircle>Ecommerce website design experience</li>
                                <li className='flex items-center gap-2'><BsRecordCircle></BsRecordCircle>Familiarity with mobile and web apps preferred</li>
                                <li className='flex items-center gap-2'><BsRecordCircle></BsRecordCircle>Experience using Invision a plus</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className='w-1/3'>
                    <div className='border px-4 py-4'>
                        <h2 className='text-xl'>Job Overview</h2>
                        <div className='space-y-1 py-4 font-medium text-[#262626b5]'>

                            <div className='flex items-center justify-between'>
                                <p>Posted date :</p>
                                <p>12 Aug 2019</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p>Location :</p>
                                <p>New York</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p>Vacancy :</p>
                                <p>02</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p>Job nature :</p>
                                <p>Full time</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p>Salary :</p>
                                <p>$7,800 yearly</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p>Application date :</p>
                                <p>12 Sep 2020</p>
                            </div>

                        </div>
                        <button className='px-4 py-2 bg-[#f83333] hover:bg-[#F36969] duration-300 text-white font-semibold rounded cursor-pointer'>Apply Now</button>
                    </div>

                    <div className='py-12'>
                        <h2 className='text-xl font-medium py-2'>Company Information</h2>
                        <h2 className='text-xl font-bold'>Mamondots</h2>
                        <p className='py-1 text-[#26262692]'>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>

                        <div className='mt-4 space-y-2'>

                            <div className='flex items-center justify-between text-[#262626a9]'>
                                <p className='font-medium text-lg '>Name: </p>
                                <p>Mamondots</p>
                            </div>

                            <div className='flex items-center justify-between text-[#262626a9]'>
                                <p className='font-medium text-lg '>Web : </p>
                                <p>mamonrabin@gmail.com</p>
                            </div>

                            <div className='flex items-center justify-between text-[#262626a9]'>
                                <p className='font-medium text-lg '>Email: </p>
                                <p>carrier.mamondots.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsJob;