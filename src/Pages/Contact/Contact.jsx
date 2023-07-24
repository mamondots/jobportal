import img from '../../assets/img/contact.png'

const Contact = () => {
    return (
        <div className="lg:px-20 md:px-16 sm:px-10 px-8 py-8">
            <div className="grid lg:grid-cols-2 lg:gap-8 py-12">
                 <div>
                        <img src={img} alt="" />
                 </div>

                 <div className='space-y-4'>
                    <h2 className='text-xl font-medium text-[#F36969]'>Waiting for your text</h2>
                    <div className='flex space-x-4'>
                        <input className='border w-[50%] px-4 py-2' type="text" name="" id="" placeholder='Enter First Name' />
                        <input className='border w-[50%] px-4 py-2' type="text" name="" id="" placeholder='Enter Last Name' />
                    </div>
                    <input className='border w-[100%] px-4 py-2' type="email" name="" id="" placeholder='Enter Your Email' />
                    <textarea className='border w-[100%] px-4 py-2' name="" id="" cols="60" rows="5" placeholder='Write Your Message'></textarea>
                    <input className='border px-8 py-3 text-base cursor-pointer hover:bg-[#F36969] hover:text-white duration-500 font-semibold text-[#F36969] border-[#F36969]' type="submit" value="SEND NOW" />
                 </div>
            </div>
        </div>
    );
};

export default Contact;