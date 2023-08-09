import { useEffect, useState } from "react";


const Profile = () => {
    const [candidets, setCandidets] = useState([])
    useEffect(() =>{
        fetch('candident.json')
        .then(res => res.json())
        .then(data =>{
            setCandidets(data)
           
        })
    },[])
    return (
        <div className="lg:px-20 md:px-16 sm:px-10 px-8 py-8">
            <h2 className="text-2xl font-bold title">Expert Freelancer</h2>
            <div className="mt-20">
                 <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-6 md:gap-4 gap-2 lg:space-y-0 md:space-y-0 space-y-2">
                      {
                          candidets.map((candidet,index) =><div key={index}>
                            
                            <div className="condi-box">
                                <div>
                                    <img src={candidet.image} alt="" />
                                </div>
                                <div className="text-center py-4">
                                    <h2 className="text-2xl py-1 font-medium">{candidet.title}</h2>
                                    <p>{candidet.position}</p>
                                    <div className="boxhid">
                                    <p className="text-[#747474]">Work Exp: {candidet.expense} years</p>
                                    <p className="text-[#747474] py-1">Loc :{candidet.location}</p>
                                    </div>
                                    <button className="bg-[#F36969] px-6 py-2 text-base font-medium text-white mt-2 hover:bg-[#fa0606] duration-300 hover:rounded-md condi-btn">View Resume</button>
                                </div>
                                     
                            </div>

                          </div>)  
                      }
                 </div>
            </div>
        </div>
    );
};

export default Profile;