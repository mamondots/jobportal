import { Link } from "react-router-dom";


const About = () => {
    return (
        <div className="flex justify-center items-center flex-col py-40">
            <h2 className="text-2xl font-semibold">No Requerment any information in task details</h2>
            <Link to='/'>
            <h2 className="px-8 py-3 bg-[#F36969] text-white font-semibold mt-8 cursor-pointer">BACK TO MOME</h2>
            </Link>
        </div>
    );
};

export default About;