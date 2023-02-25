import React from 'react';
import Section, { Img, Infos } from './CardStyle';
import { IProduct } from '../../interfaces/IProductContext';

function Card({product}: { product: IProduct }) {
  const { thumbnail, title, price } = product;
  return (
    <Section>
      <Img src={thumbnail} alt={title} />
      <Infos>
        <p className='tilte'>{title}</p>
        <p className='price'>{price}</p>
      </Infos>
    </Section>
  )
}

export default Card;
