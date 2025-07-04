import { createContext } from 'react';
import { products } from '../assets/frontend_assets/assets';
export const ShopContext = createContext(null);
import { useState } from 'react';


const ShopContextProvider = (props) => {

  const currency = "$"; 
  const delivery_fee = 10;

  const [search , setSearch] = useState();
  const [showSearch , setShowSearch] = useState(false);
  const Value = {
    // Define your context values here
    products , currency, delivery_fee,
    search, setSearch, showSearch, setShowSearch,
  };
  return (
    <ShopContext.Provider value={Value}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;