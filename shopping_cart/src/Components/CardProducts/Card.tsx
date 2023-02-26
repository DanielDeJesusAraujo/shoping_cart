import React from 'react';
import { Img, Infos } from './CardStyle';
import { IProduct } from '../../interfaces/IProductContext';
import Li from './CardStyle';

function Card({ product }: { product: IProduct }) {
  const { thumbnail, title, price } = product;
  return (
    <Li>
      <Img src={thumbnail} alt={title} />
      <Infos>
        <p className='tilte'>{title}</p>
        <p className='price'>
          {
            price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
          }
        </p>
      </Infos>
    </Li>
  )
}

export default Card;
