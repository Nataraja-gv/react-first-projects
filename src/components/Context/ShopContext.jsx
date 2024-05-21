import React, { createContext } from 'react';
import All_data from '../../components/assets/All_data.js';

 export const ShopContext = createContext(null)

const ShopContextProvider =(props)=>{
    const contextValue={All_data};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
