import React from 'react'
import { heroData } from '../utils/Data';
import Delivery from '../img/delivery.png';
import cheff from '../img/cheff.png'


const HomeContainer = () => {


    return (
        <div className='grid grid-cols-1 py-20 md:grid-cols-2 w-full'>
            <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
                <div className='flex items-center gap-2 justify-center bg-gray-400 px-2 py-1 rounded-full'>
                    <p className='text-base text-gray-100 font-normal'>
                        Bike Delivery
                    </p>
                    <div className='w-8 h-8 rounded-full overflow-hidden drop-shadow-xl'>
                        <img
                            src={Delivery}
                            alt='Bike Delivery'
                            className='w-full bg-white h-full object-contain w-'
                        />
                    </div>
                </div>
                <p className='text-[2.5rem] lg:text-[4.25rem] font-bold tracking-wide text-headingColor'>
                    The fastest Delivery in <span className='text-blue-400 text-[3rem] lg:text-[5rem]'>Ibadan City</span>
                </p>
                <p className='text-base text-textColor text-left md:w-[80%]'>Restaurant style. Yogurt Mint Sauce is delicious dip which is quick and easy to .. This is a standard Indian mint chutney served with poppadums along with mint and lemon. We provide pleasure to your tastebuds 😉..</p>

                <button type='button' className='bg-blue-400 w-auto px-4 py-2 rounded-lg mb-12 lg:mb-0 hover:shadow-lg hover:bg-blue-800 transition-all ease-in-out duration-100 text-white'>Order now</button>
            </div>
            <div className='flex justify-center items-center relative'>
                <img src={cheff} alt="Hero-bg" className='flex items-center justify-center lg:h-600 h-300 lg:w-auto' />
            </div>
        </div>
    )
}

export default HomeContainer