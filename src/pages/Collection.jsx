import React from 'react'
import { useContext , useState} from 'react';
import { ShopContext } from '../context/ShopContext';
import {assets} from "../assets/frontend_assets/assets.js"

const collection = () => {

  const {products} = useContext(ShopContext);
  const [showFilters, setShowFilters] = useState(false);
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/*filter option*/}
      <div className='min-w-60'>
        <p onClick={() => setShowFilters(!showFilters)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img  className={`h-3 sm:hidden ${showFilters? 'rotate-90': ''}`} src={assets.dropdown_icon} alt='' ></img>
        </p>
        {/*Category filter*/}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters ? '' : 'hidden'} sm:block`}>
          <p className='text-sm font-medium mb-3'>CATEGORY</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>

            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Men'} />
              Men
            </p>

            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Women'} />
              Women
            </p>

            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Kids'} />
              Kids
            </p>

          </div>
        </div>
        {/* Sub Category filter*/}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilters ? '' : 'hidden'} sm:block`}>
          <p className='text-sm font-medium mb-3'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>

            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Topwear'} />
              Topwear
            </p>

            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Bottomwear'} />
              Bottomwear
            </p>

            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Winterwear'} />
              Winterwear
            </p>

          </div>
        </div>
      </div>

    </div>
  )
}

export default collection