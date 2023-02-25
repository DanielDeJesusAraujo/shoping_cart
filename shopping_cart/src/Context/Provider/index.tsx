import React, { ReactNode, useState } from 'react';
import AppContext from '..';

function ContextProvide({ children }: { children: ReactNode }): JSX.Element {
  const [productList, setProductList] = useState([{}])

  const initialState = {
    productList,
    setProductList,
  }

  return (
    <AppContext.Provider value={{state: initialState}}>
      {children}
    </AppContext.Provider>
  );
}

export default ContextProvide;