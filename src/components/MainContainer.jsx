import React from 'react';
import Delivery from './img/delivery.png';
const MainContainer = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
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
				<p className='text-[2.5rem] font-bold spacing tracking-wide text-headingColor'>
					The fastest Delivery in <span className='text-blue-400 text-[3rem]'>IBADAN</span>
				</p>
        <p className='text-base text-textColor font-poppins text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum! Magnam obcaecati veritatis eius repudiandae nemo, porro iste nisi alias deserunt sunt pariatur voluptas voluptates culpa accusamus est at earum.</p>

        <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 md:w-auto w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'>Order now</button>
			</div>
			<div className='py-2 bg-blue-400 flex-1'></div>
		</div>
	);
};

export default MainContainer;
