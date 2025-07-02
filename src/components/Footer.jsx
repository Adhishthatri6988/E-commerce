import React from 'react'
import {assets} from "../assets/frontend_assets/assets.js"
const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40  text-sm'>

        <div>
          <img src={assets.logo} className='mb-5 w-32' />
          <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cumque.
          </p>
        </div>

        <div >
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li className='hover:text-black cursor-pointer'>HOME</li>
            <li className='hover:text-black cursor-pointer'>About Us</li>
            <li className='hover:text-black cursor-pointer'>Delivery</li>
            <li className='hover:text-black cursor-pointer'>Privacy Policy</li>
            </ul>
        </div>

        <div >
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li className='hover:text-black cursor-pointer'>+91 1234567890</li>
            <li className='hover:text-black cursor-pointer'>singhadhishthatri@gmail.com</li>
            
            </ul>
        </div>
      </div>

      <div >
        <hr></hr>
        <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com  - All Right Reserverd.</p>
      </div>
    </div>
  )
}

export default Footer