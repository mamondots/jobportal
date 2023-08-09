import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Question = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
                console.log(data)
            })
    }, [])
    return (
        <div className="lg:px-20 md:px-16 sm:px-10 px-8 py-8">
            <h2 className="text-2xl font-bold title">OUR REGULAR BLOG</h2>
            <div className="py-12">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-8 md:gap-4 lg:space-y-0 md:space-y-0 space-y-2 relative">
                    {
                        blogs.map((blog, index) => <div key={index}>

                        <Link to='/detailsblog'>
                        <div className="group cursor-pointer">
                                <div className="overflow-hidden">
                                    <img className="mt-5 group-hover:scale-105 duration-500" src={blog.image} alt="" />
                                    <p className="
                                    absolute 
                                    px-3
                                    py-3
                                    text-xl
                                    font-medium
                                    text-white
                                    bg-[#F36969] 
                                    top-0

                                    ">{blog.date}</p>
                                </div>
                                <div className="">
                                <div className="px-8 mt-4">
                                    <h2 className="text-xl hover:text-[#F36969] duration-500 font-bold py-2">{blog.title}</h2>
                                    <p>{blog.description}</p>
                                </div>
                                </div>
                        </div>
                        </Link>

                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Question;