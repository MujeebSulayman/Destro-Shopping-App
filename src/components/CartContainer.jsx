import React from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { motion } from 'framer-motion'
import { RiRefreshFill } from 'react-icons/ri'
import { BiPlus } from 'react-icons/bi'
import { BiMinus } from 'react-icons/bi'
import i1 from '../img/i1.png'
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';


const CartContainer = () => {

  const [{ cartShow }, dispatch] = useStateValue();

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow
    })
  }


  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 3, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className='fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]'>

      <div className='w-full flex items-center cursor-pointer justify-between p-4'>
        <motion.div
          whileTap={{ scale: 0.7 }}
          onClick={showCart}
        >

          <MdOutlineKeyboardBackspace className='text-3xl' />
        </motion.div>
        <p className='text-textColor text-lg font-semibold'>Cart</p>
        <motion.p
          whileTap={{ scale: 0.7 }}
          className='flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md cursor-pointer text-textColor text-base'>Clear <RiRefreshFill /> </motion.p>
      </div>

      <div className='w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col'>
        <div className='w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>

          {/* Cart Item */}
          <div className='w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2 '>
            <img src={i1} alt="" className='w-20 h-20 max-w-[60px] rounded-full object-cover' />

            {/* Cart Item Name */}
            <div className='flex flex-col gap-2'>
              <p className='text-base text-gray-50'>
                Chocolate & Strawberry
              </p>
              <p className='text-sm text-gray-300 font-semibold'>N2999</p>
            </div>
            {/* Button Section */}
            <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
              <motion.div whileTap={{ scale: 0.7 }} >

                <BiMinus className='text-gray-50' />
              </motion.div>
              <p className='text-white flex items-center justify-center w-5 h-5'>1</p>

              <motion.div whileTap={{ scale: 0.7 }} className='text-gray-50'>
                <BiPlus />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Cart Total Section */}

        <div className='w-full flex flex-1 items-center flex-col justify-evenly bg-cartTotal rounded-t-[2rem] px-8 py-2'>
          <div className='w-full flex items-center justify-between'>
            <p className='text-gray-400 text-lg'>Sub Total: </p>
            <p className='text-gray-400 text-lg'>N2999</p>
          </div>
          <div className='w-full flex items-center justify-between'>
            <p className='text-gray-400 text-lg'>Delivery</p>
            <p className='text-gray-400 text-lg'>N500</p>
          </div>
          <div className='w-full border-b border-gray-600 my-2' />
          <div className='w-full flex items-center justify-between'>
            <p className='text-gray-200 text-xl font-semibold'>Total:</p>
            <p className='text-gray-200 text-xl font-semibold'>N3499</p>
          </div>

          <motion.button
            whileTap={{ scale: 0.7 }}
            type='button'
            className='w-full p-2 rounded-full bg-blue-600 text-gray-50 text-lg my-2 hover:shadow-lg hover:bg-blue-400 transition-all duration-150 ease-in-out'
          >
            Checkout
          </motion.button>

        </div>
      </div>
    </motion.div>
  )
}

export default CartContainer