import video from '../../assets/video/demo.mp4'
import './Profile.css'

const Profile = () => {
    return (
        <div className="lg:px-20 md:px-16 sm:px-10 px-8 py-8">
            <div className='px-20'>
                 <video controls src={video}></video>
            </div>
            <div className='py-20 px-20 grid lg:grid-cols-3 md:grid-cols-2 lg:gap-8 md:gap-4 text-center'>
                 <a className='bg-[#F36969] py-4 text-2xl font-bold text-white' href="https://poetic-shortbread-0e044e.netlify.app/">Landing web page</a>
                 <a className='bg-[#23C0E9] py-4 text-2xl font-bold text-white' href="https://tranquil-cascaron-f3b435.netlify.app/">Landing web page</a>
                 <a className='bg-[#F36969] py-4 text-2xl font-bold text-white' href="https://golden-medovik-944b18.netlify.app/">Landing web page</a>
            </div>
        </div>
    );
};

export default Profile;