import { createContext } from 'react';
import { products } from '../assets/frontend_assets/assets';
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {

  const currency = "$"; 
  const delivery_fee = 10;
  const Value = {
    // Define your context values here
    products , currency, delivery_fee,
  };
  return (
    <ShopContext.Provider value={Value}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;