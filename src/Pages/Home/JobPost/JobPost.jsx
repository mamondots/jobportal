import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const JobPost = () => {
    const [postes, setPostes] = useState([])
    useEffect(() =>{
        fetch('jobpost.json')
        .then(res => res.json())
        .then(data =>{
            setPostes(data)
            
        })
    },[])
    return (
        <div className="lg:px-20 md:px-16 sm:px-10 px-8 py-8 bg-[#F9F9F9]">
            <h2 className="text-2xl font-bold title">WORK WATING FOR YOU</h2>
            <div className="py-8">
                 <div className="grid 
                 lg:grid-cols-4
                 md:grid-cols-3
                 sm:grid-cols-2
                 lg:gap-4
                 md:gap-3
                 sm:gap-2
                 lg:space-y-0
                 md:space-y-0
                 sm:space-y-0
                 space-y-2
                 ">
                     {
                        postes.map((post,index) =><div key={index}>


                        <Link to='/alljob'>
                        <div className="flex items-center justify-between border border-[#23c1e931] px-4 py-2 font-medium hover:bg-[#a6e7f731] duration-300 cursor-pointer hover:text-[#23C0E9]">
                            <h2>{post.title}</h2>
                            <p className=''>{post.amount}</p>
                        </div>
                        </Link>

                        </div>)
                     }
                 </div>
            </div>
        </div>
    );
};

export default JobPost;