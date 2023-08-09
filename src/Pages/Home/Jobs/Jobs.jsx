import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Jobs = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() =>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data =>{
            setJobs(data)
            
        })
    },[])
    return (
        <div className="lg:px-20 md:px-16 sm:px-10 px-8 py-8 bg-[#F9F9F9]">
            <h2 className="text-2xl font-bold title">JOBS FOR FRESHER</h2>

            <div className="grid lg:grid-cols-2 gap-4 py-8">
                 {
                    jobs.slice(0,6).map((job,index) =><div key={index}>

                        <div className="border cursor-pointer flex lg:px-4 px-2 py-6 bg-[#fff] items-center hover:border-[#f691918e] duration-500 relative">
                            <div>
                                <img src={job.logo} alt="" />
                            </div>
                            <div className="lg:px-4">
                                <h2 className="font-medium text-lg">{job.title}</h2>
                                <div className="lg:flex md:flex sm:flex items-center lg:space-x-4 text-[#888787]">
                                <p className="">{job.name}</p>
                                <p>{job.location}</p>
                                </div>
                                
                            </div>
                            <div className="absolute right-6 hidden lg:block md:block sm:block">
                                <Link to='/detailsjob'>
                                <button className="px-4 py-2 bg-[#F36969] text-base text-white font-medium rounded hover:bg-[#f41b1b] duration-300">APPLY NOW</button>
                                </Link>
                                
                            </div>
                        </div>
                        
                    </div>)
                 }
                 
            </div>
            <div className="flex items-center justify-center">
                      <Link to='/alljob'>
                      <button className="px-8 py-3 bg-[#F36969] font-medium text-white  rounded hover:bg-[#f41b1b] duration-300">SEE ALL JOBS</button>
                      </Link>
                 </div>
        </div>
    );
};

export default Jobs;