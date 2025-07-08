import React from 'react'
import Title from '../components/Title.jsx';
import {assets} from "../assets/frontend_assets/assets.js";
import NewsletterBox from '../components/NewsletterBox'


const contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt=''></img>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Address</p>
          <p className='text-gray-500'>R.K Dangal , Asansol <br></br> West Bengal , India</p>
          <p className='text-gray-500'>Tel : (91+) 8110909991 <br></br> Email : asunasingh2003@gmail.com</p>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default contact