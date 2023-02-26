import React, { useEffect, useContext } from 'react';
import { getAll } from '../../Api/Products';
import AppContext from '../../Context';
import ProductsList, { ItenProducts } from './ProductsStyles';
import IProductList from '../../interfaces/IProductContext'
import Card from '../CardProducts/Card';

function Products() {
  const {state: {productList, setProductList}} = useContext(AppContext) as {state: IProductList};

  useEffect(() => {
    (async () => {
      const productList = await getAll();
      console.log(JSON.stringify(productList))
      if (productList[0].id) {
        setProductList(productList);
      }
    })();
  }, []);

  return (
    <ProductsList>
      {
        productList[0].id? (
          productList.map((prod) => (
            <Card key={prod.id} product={prod} />
          ))
        ) : (null)
      }
    </ProductsList>
  )
}

export default Products;
