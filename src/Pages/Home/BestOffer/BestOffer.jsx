import { useEffect, useState } from 'react';
import './BestOffer.css'
import { Link } from 'react-router-dom';
const BestOffer = () => {
    const [offers, setOffers] = useState([])
    useEffect(() =>{
        fetch('bestoffer.json')
        .then(res => res.json())
        .then(data =>{
            setOffers(data)
           
        })
    },[])
    return (
        <div className="lg:px-20 md:px-16 sm:px-10 px-8 py-8 bg-[#F9F9F9]">
           <div>
              <h2 className="text-2xl font-bold title">OFFERING THE BEST DEALS</h2>
           <div className="
            grid lg:grid-cols-3
            md:grid-cols-2 lg:gap-4 gap-2
            lg:space-y-0 md:space-y-0 space-y-2 py-5 mt-8
            ">
                {
                    offers.map((offer,index) =><div key={index}>

                            <Link>
                            <div className='flex  space-x-4 box border px-8 py-4 cursor-pointer'>
                                <div>
                                <img className='w-[120%] offImg' src={offer.image_url} alt="" />
                                </div>
                                <div className='px-2'>
                                    <h2 className='text-xl font-medium subtitle'>{offer.title}</h2>
                                    <p className='py-2'>{offer.description}</p>
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

export default BestOffer;