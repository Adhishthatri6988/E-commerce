import { use, useContext , useState} from 'react';
import { ShopContext } from '../context/ShopContext';
import {assets} from "../assets/frontend_assets/assets.js";
import Title from '../components/Title.jsx';
import ProductItem from '../components/ProductItem.jsx';
import { useEffect } from 'react';


const collection = () => {

  const {products , search , showSearch} = useContext(ShopContext);
  const [showFilters, setShowFilters] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [SubCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item !== e.target.value));
    }
    else {
      setCategory(prev =>[...category, e.target.value]);
    }
  }

  const toggleSubCategory = (e) => {
    if(SubCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    }
    else {
      setSubCategory(prev =>[...SubCategory, e.target.value]);
    }
  }

  const applyFilter = () => {
    let productCopy = products.slice();

    if(showSearch && search){
      productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }
    if(category.length > 0){
      productCopy = productCopy.filter(item => category.includes(item.category));
    }
    if(SubCategory.length > 0){
      productCopy = productCopy.filter(item => SubCategory.includes(item.subCategory));
    }

    setFilteredProducts(productCopy);
  }

  
  const sortProducts = () => {
    let fpCopy = filteredProducts.slice();
    switch(sortType) {
      case 'low-high':
        setFilteredProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilteredProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter() ;
  }
}

  useEffect (() => {
    applyFilter();
  }, [category, SubCategory , search, showSearch]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);


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
              <input type="checkbox" className='w-3' value={'Men'} onChange={toggleCategory}/>
              Men
            </p>

            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Women'} onChange={toggleCategory}/>
              Women
            </p>

            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Kids'} onChange={toggleCategory} />
              Kids
            </p>

          </div>
        </div>
        {/* Sub Category filter*/}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilters ? '' : 'hidden'} sm:block`}>
          <p className='text-sm font-medium mb-3'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>

            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Topwear'} onChange={toggleSubCategory} />
              Topwear
            </p>

            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Bottomwear'} onChange={toggleSubCategory} />
              Bottomwear
            </p>

            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Winterwear'} onChange={toggleSubCategory} />
              Winterwear
            </p>

          </div>
        </div>
      </div>
      {/* Right Side*/}
      <div className='flex-1'>
        <div className='flex justify-between mb-4 text-base sm:text-2xl'>
          <Title text1='ALL' text2='COLLECTIONS' />
          {/* Sort By */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300  px-2  text-sm '>
            <option value="relevant">Sort By: Relevant</option>
            <option value="low-high">Sort By: Low to High</option>
            <option value="high-low">Sort By: High to Low</option>
          </select>
        </div>

{/*MAP Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filteredProducts.map((item , index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }
          </div>
      </div>




    </div>
  )
}

export default collection