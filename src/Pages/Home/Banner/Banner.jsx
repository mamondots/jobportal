import { AiOutlineSearch } from 'react-icons/ai';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/xCdL611/banner02.jpg)' }}>
                <div className="hero-overlay bg-opacity-60 bg-[#262626]"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl ">
                        <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold leading-tight">We Offer 
                        <span className="text-[#F36969]"> 25K+ Job</span> Vacancies Right Now
                        </h1>
                        <p className="text-lg font-medium py-1">Find Jobs, Employment & Career Opportunities</p>
                        <p className="mb-5">
                            There are many variations of passages of Lorem Ipsum Fasts
                            by injected humour, or randomised words which...
                        </p>
                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;