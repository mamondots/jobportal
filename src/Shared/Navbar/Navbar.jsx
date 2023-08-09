import { Link } from 'react-router-dom';
import './Navbar.css'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import userImg from '../../assets/img/userImg.jpg'
import Headroom from 'react-headroom';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(result => {
                const user = result.use
                console.log(user)
            })
    }
    return (
        <div>
            <Headroom>
            <div
                className="lg:px-20 md:px-16 sm:px-10 px-8 py-8
            flex justify-between items-center bg-white">
                <div>
                    <Link to='/'>
                    <h2 className="text-xl font-medium cursor-pointer">MAMONDOTS.</h2>
                    </Link>
                </div>
                <div className='hidden lg:block'>
                    <ul className="flex items-center space-x-8 font-medium nav">
                        <li><Link to='/'><a href="">HOME</a></Link></li>
                        <li><Link to='/alljob'><a href="">All Jobs</a></Link></li>
                        <li><Link to='/allblogs'><a href="">BLOG</a></Link></li>
                        <li><Link to='/profile'><a href="">FREELANCER</a></Link></li>
                        <li><Link to='/contact'><a href="">CONTACT</a></Link></li>
                    </ul>
                </div>
                <div className="flex items-center space-x-4 cursor-pointer">
                    <div className='px-4 py-2 bg-[#23C0E9] hover:bg-[#0bc9f9] duration-300 text-white font-medium hidden lg:block'>
                        <h2>JOB POSTER</h2>
                    </div>
                    <div>

                        {
                            user ?
                                <>
                                 <div onClick={handleLogout}>
                                        {
                                            user?.photoURL?
                                            <>
                                            <img className='rounded-full w-8 h-8' src={user.photoURL} alt="" />
                                            </>
                                            :
                                            <>
                                               <img className='rounded-full w-8 h-8' src={userImg} alt="" />
                                            </>
                                        }
                                   </div>
                                </>
                                :
                                <>
                                    <Link to='/singin'>
                                        <button className='px-6 py-2 bg-[#F36969] hover:bg-[#fb3535] duration-300 text-white font-medium'>LOGIN</button>
                                    </Link>
                                </>
                        }
                    </div>
                </div>
            </div>
            </Headroom>
            
        </div>
    );
};

export default Navbar;