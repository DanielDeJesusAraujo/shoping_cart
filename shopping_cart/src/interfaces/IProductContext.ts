export default interface IProductList {
  productList: IProduct[];
  setProductList: Function;
}

export interface IProduct {
  id: string;
  title: string;
  category_id: string;
  condition: string;
  thumbnail: string;
  currency_id: string;
  price: number;
  original_price: number;
  available_quantity: number;
}