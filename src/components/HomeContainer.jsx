import React from 'react'
import { heroData } from '../utils/Data';
import Delivery from '../img/delivery.png';
import HeroBg from '../img/heroBg.png'


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
                <p className='text-base text-textColor text-left md:w-[80%]'>Restaurant style Yogurt Mint Sauce is delicious dip which is quick and easy to .. This is a standard Indian mint chutney served with poppadums along with mint and lemon. We provide pleasure to your tastebuds 😉..</p>

                <button type='button' className='bg-blue-400 w-auto px-4 py-2 rounded-lg mb-12 lg:mb-0 hover:shadow-lg hover:bg-blue-800 transition-all ease-in-out duration-100 text-white'>Order now</button>
            </div>
            <div className='py-2 flex-1 items-center relative'>
                <img src={HeroBg} alt="Hero-bg" className='ml-auto h-420 w-full lg:w-auto lg:h-650' />

                <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-4 gap-2 flex-wrap'>
                    {heroData &&
                        heroData.map((n) => (
                            <div
                                key={n.id}
                                className="  lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
                            >
                                <img
                                    src={n.imageSrc}
                                    className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
                                    alt="I1"
                                />
                                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                                    {n.name}
                                </p>

                                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                                    {n.decp}
                                </p>

                                <p className="text-sm font-semibold text-headingColor">
                                    <span className="text-xs text-red-600">N</span> {n.price}
                                </p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default HomeContainer