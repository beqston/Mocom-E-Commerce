import { ReactNode, createContext, useEffect, useState } from "react";
import { ProdsType } from "../Pages/ShopAll";
// export type SearchItemType = {
//   prods: ProdsType;
// };
export type CartContextType = {
  searchItem: string;
  searchChange: (e: React.ChangeEvent<HTMLInputElement>)=> void;
};
export const CartContext = createContext<null | CartContextType>(null);

const CartContextProvider = ({ children }: { children: ReactNode }) => {
 
  const [searchItem, setSearchItem] = useState('');


  
  const searchChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
    setSearchItem(e.target.value);
  }



  return (
    <CartContext.Provider value={{ searchItem, searchChange }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;