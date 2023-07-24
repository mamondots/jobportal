import { FaFacebookF,FaGoogle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const SingIn = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const {signIn,signInWithGoogle} = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        
        signIn(data.email, data.password)
        .then(result =>{
            const user = result.user
            console.log(user)
            navigate(from, {replace:true})
        })  
    };

    const handleGoogle = () =>{
        signInWithGoogle()
        .then(result =>{
            const loggedUser = result.user
            console.log(loggedUser)
            navigate(from, {replace:true})
        })
        
       }

    return (
        <div className="lg:px-20 md:px-16 sm:px-10 px-8 py-8">
            <h2 className="text-2xl font-bold text-center">Join Us For Getting Job</h2>
            <div>
            <div className=' py-12 lg:px-60 md:px-40 sm:px-20 px-10 lg:ml-20'>
                <form onSubmit={handleSubmit(onSubmit)} className='py-12 border flex items-center flex-col relative'>
                    <div className='text-center w-2/3'>
                    <h2 className='text-2xl font-semibold'>Sing In</h2>
                    <p className='py-2 text-[#8f8e8e]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, explicabo!</p>
                    </div>
                    <div className="form-control lg:w-3/4 w-full lg:px-0 md:px-20 sm:px-20 px-5">
                        <label className="label">
                            <span className="label-text">Email/username</span>
                        </label>
                        <input {...register("email", { required: true })} type="email" placeholder="Enter your email" className="py-3 px-4 border rounded-md outline-none w-full" />
                        {errors.email && <span className='text-[red] py-1'>place enter email</span>}
                    </div>
                    <div className="form-control lg:w-3/4 w-full  lg:px-0 md:px-20 sm:px-20 px-5">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input  {...register("password", { required: true })} type="password" placeholder="Enter Password" className="py-3 px-4 border rounded-md outline-none w-full " />
                        {errors.password && <span className='text-[red] py-1'>enter password</span>}
                    </div>
                    <div className='flex items-center  space-x-2 py-2 cursor-pointer  lg:w-3/4 w-full lg:px-0 md:px-20 sm:px-20 px-5'>
                          <input type="checkbox" name="" id="" />
                          <h2 className='text-[#696868]'>Remember me</h2>
                    </div>
                    <div className="form-control lg:w-3/4 w-full lg:px-0 md:px-20 sm:px-20 px-5">
                        <input type="submit" className="py-[11px] rounded-md cursor-pointer bg-[#DA4600] hover:bg-[#da4500d1] duration-300 text-white px-4 border  w-full mt-4 outline-none" value="Sing In" />
                    </div>
                    <div className='grid lg:grid-cols-2 lg:w-3/4 w-full lg:px-0 md:px-20 sm:px-20 px-5 py-4 lg:gap-4 text-center cursor-pointer space-y-2 lg:space-y-0'>
                         <p onClick={handleGoogle} className='flex items-center text-center py-2 lg:px-12 px-10 font-medium text-white  bg-[#E85250] hover:bg-[#e85350d4] duration-300 rounded'>with google <span className='mt-1 ml-2'><FaGoogle></FaGoogle></span></p>
                         <p className='flex items-center bg-[#3A77BE] hover:bg-[#3a78bed9] duration-300 py-2  lg:px-12 px-10 font-medium text-white rounded'>with facebook <span className='mt-1 ml-2'><FaFacebookF></FaFacebookF></span></p>
                    </div>
                    <p className='text-lg font-medium text-[#747474] cursor-pointer'>if you new here 
                    <Link to='/singup'>
                    <span className='text-[#E85250]'>Sing Up</span>
                    </Link>
                     now</p>
                </form>
            </div>
            </div>
        </div>
    );
};

export default SingIn;