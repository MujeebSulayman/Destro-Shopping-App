import React from 'react';
import Logo from './img/logo.png';
import { motion } from 'framer-motion';
import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md';

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../firebase.config';

import Avatar from './img/avatar.png';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const Header = () => {
	const firebaseAuth = getAuth(app);
	const provider = new GoogleAuthProvider();

	const [{ user }, dispatch] = useStateValue();

	const login = async () => {
		const {
			user: { refreshToken, providerData },
		} = await signInWithPopup(firebaseAuth, provider);
		dispatch({
			type: actionType.SET_USER,
			user: providerData[0],
		});
	};

	return (
		<header className='fixed z-50 p-6 px-16 w-screen'>
			<div className='hidden md:flex h-full w-full'>
				<Link to={'/'} className='flex items-center gap-2'>
					<img src={Logo} alt='logo' className='w-9 object-cover' />
					<p className='text-headingColor text-xl font-bold'>HemDestro</p>
				</Link>
				<ul className='flex items-center gap-7 ml-auto'>
					<li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
						Home
					</li>
					<li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
						Menu
					</li>
					<li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
						Services
					</li>
					<li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
						About
					</li>
					<li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
						Contact
					</li>
				</ul>

				<div className='flex relative justify-center items-center cursor-pointer'>
					<MdShoppingBasket className='text-textColor text-2xl ml-7' />
					<div className='absolute -top-1 -right-3 w-6 h-6 flex items-center justify-center rounded-full bg-cartNumBg'>
						<p className='text-xs flex items-center justify-center text-white font-semibold'>
							3
						</p>
					</div>
				</div>
				<div className='flex ml-7 justify-center items-center cursor-pointer'>
					<motion.img
						whileTap={{ scale: 0.6 }}
						src={Avatar}
						alt='userProfile'
						className='w-8 h-8 flex'
						onClick={login}
					/>
				</div>
			</div>

			<div className='flex md:hidden w-full h-full'></div>
		</header>
	);
};

export default Header;
