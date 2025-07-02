import React from 'react'
import { Link } from 'react-router-dom';

const ProductItem = ({id , name , img , price}) => {
  const {currency} = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
      <div className=' overflow-hidden'>
        <img src={Image[0]} alt="" className='transition ease-in-out hover:scale-115' />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency} {price}</p>
    </Link>
  )
}

export default ProductItem