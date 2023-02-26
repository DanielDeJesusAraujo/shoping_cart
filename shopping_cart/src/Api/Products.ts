import axios from 'axios';
import { IProduct } from '../interfaces/IProductContext';


async function getAll(): Promise<IProduct[]> {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=roupas`;
  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    return []
  }
}

async function getByCategory(dategory: string) {

}

export {
  getAll,
  getByCategory,
}
