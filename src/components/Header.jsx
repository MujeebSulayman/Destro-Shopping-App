import React, { useState } from 'react';
import Logo from '../img/logo.png';
import { motion } from 'framer-motion';
import close from '../img/close.svg';
import menu from '../img/menu.svg';
import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md';

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../firebase.config';

import Avatar from '../img/avatar.png';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const Header = () => {
	const firebaseAuth = getAuth(app);
	const provider = new GoogleAuthProvider();

	const [{ user }, dispatch] = useStateValue();
	const [isMenu, setIsMenu] = useState(false);
	const [toggle, setToggle] = useState(false);

	const login = async () => {
		if (!user) {
			const {
				user: { providerData },
			} = await signInWithPopup(firebaseAuth, provider);
			dispatch({
				type: actionType.SET_USER,
				user: providerData[0],
			});

			localStorage.setItem('user', JSON.stringify(providerData[0]));
		} else {
			setIsMenu(!isMenu);
		}
	};

	const logout = () => {
		setIsMenu(false);
		localStorage.clear();
		dispatch({
			type: actionType.SET_USER,
			user: null,
		});
	};

	return (
		<header className='fixed z-50 p-3 px-4 md:p-6 w-screen bg-white box-shadow-lg'>
			<div className='hidden md:flex h-full w-full'>
				<Link to={'/'} className='flex items-center gap-2'>
					<img src={Logo} alt='logo' className='w-9 object-cover' />
					<p className='text-headingColor text-xl font-bold'>HemDestro</p>
				</Link>
				<motion.ul
					initial={{ opacity: 0, x: 200 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: 200 }}
					className='flex items-center gap-7 mr-10 ml-auto'
				>
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
				</motion.ul>

				<div className='flex relative justify-center items-center cursor-pointer'>
					<MdShoppingBasket className='text-textColor text-2xl ml-7' />
					<div className='absolute -top-1 -right-3 w-6 h-6 flex items-center justify-center rounded-full bg-cartNumBg'>
						<p className='text-xs flex items-center justify-center text-white font-semibold'>
							3
						</p>
					</div>
				</div>
				<div className='flex ml-7 justify-center items-center cursor-pointer mr-10'>
					<motion.img
						whileTap={{ scale: 0.6 }}
						src={user ? user.photoURL : Avatar}
						alt='userProfile'
						className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
						onClick={login}
					/>
					{isMenu && (
						<motion.div
							initial={{ opacity: 0, scale: 0.6 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.6 }}
							className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col top-16 right-4 absolute'
						>
							{user && user.email === 'sulaymanmujeeb6@gmail.com' && (
								<Link to={'/createItem'}>
									<p className='px-4 py-2 flex items-center justify-center gap-2 cursor-pointer transition-all duration-100 ease-in-out text-textColor text-base hover:bg-slate-200'>
										New Item
										<MdAdd />
									</p>
								</Link>
							)}

							<p
								className='px-4 py-2 flex items-center justify-center gap-2 cursor-pointer transition-all duration-100 ease-in-out text-textColor text-base hover:bg-slate-200'
								onClick={logout}
							>
								Logout
								<MdLogout />
							</p>
						</motion.div>
					)}
				</div>
			</div>

			{/* Mobile */}
			<div className='flex item-center justify-between md:hidden bg-white w-full h-full'>
				<div className='flex relative justify-center items-center cursor-pointer'>
					<MdShoppingBasket className='text-textColor text-2xl ml-4' />
					<div className='absolute -top-1 -right-3 w-6 h-6 flex items-center justify-center rounded-full bg-cartNumBg'>
						<p className='text-xs flex items-center justify-center text-white font-semibold'>
							3
						</p>
					</div>
				</div>
				<Link to={'/'} className='flex items-center gap-2'>
					<img src={Logo} alt='logo' className='w-8 h-10 object-cover' />
					<p className='text-headingColor text-lg font-normal'>HemDestro</p>
				</Link>

				<div className='flex justify-center items-center cursor-pointer'>
					<motion.img
						whileTap={{ scale: 0.6 }}
						src={user ? user.photoURL : Avatar}
						alt='userProfile'
						className='w-10 mr-4 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
						onClick={login}
					/>
					<div className='sm:hidden flex left-9 justify-end items-center'>
						<div className='bg-gray-500 rounded-lg h-9 w-9 flex justify-center items-center'>
							<img
								src={toggle ? close : menu}
								alt='menu'
								className='w-28px h-28px object-contain cursor-pointer'
								onClick={() => setToggle((prev) => !prev)}
							/>
						</div>
						
						<div
							initial={{ opacity: 0, scale: 0.6 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.6 }}
							className={`${toggle ? 'flex' : 'hidden'
								} w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col top-16 right-4 absolute`}
						>
							{user && user.email === 'sulaymanmujeeb6@gmail.com' && (
								<Link to={'/createItem'}>
									<p className='px-4 py-2 mb-2 flex items-center justify-center gap-2 cursor-pointer transition-all duration-100 ease-in-out text-textColor text-base hover:bg-slate-200'>
										New Item
										<MdAdd />
									</p>
								</Link>
							)}
							<ul className='flex flex-col'>
								<li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-8 py-1' onClick={() => setIsMenu(false)}>
									Home
								</li>
								<li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-8 py-1' onClick={() => setIsMenu(false)}>
									Menu
								</li>
								<li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-8 py-1' onClick={() => setIsMenu(false)}>
									Services
								</li>
								<li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-8 py-1' onClick={() => setIsMenu(false)}>
									About
								</li>
								<li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-8 py-1 mb-2'>
									Contact
								</li>
							</ul>

							<p
								className='m-2 p-2 flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base'
								onClick={logout}
							>
								Logout
								<MdLogout />
							</p>
						</div>
					</div>


				</div>
			</div>
		</header>
	);
};

export default Header;
