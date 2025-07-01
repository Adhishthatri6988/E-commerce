import React from 'react'
import {assets} from "../assets/frontend_assets/assets.js"
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <img src={assets.logo} alt="Logo" className='w-36' />
        <ul className='hidden sm:flex gap-5 text-5m text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
        <p>HOME</p>
        <hr className='w-2/4 boredr-none h-[1.5px] bg-gray-700 hidden'></hr>
        </NavLink>
        <NavLink to='/connection' className='flex flex-col items-center gap-1 '>
        <p>COLLECTION</p>
        <hr className='w-2/4 boredr-none h-[1.5px] bg-gray-700 hidden'></hr>
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1 '>
        <p>ABOUT</p>
        <hr className='w-2/4 boredr-none h-[1.5px] bg-gray-700 hidden'></hr>
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
        <p>CONTACT</p>
        <hr className='w-2/4 boredr-none h-[1.5px] bg-gray-700 hidden'></hr>
        </NavLink>
        </ul>
      </div>
  )
}

export default NavBar