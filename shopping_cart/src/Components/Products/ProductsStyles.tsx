import styled from 'styled-components';

const ProductsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-radius: 10px;

  @media (min-width: 768px) {
    background-color: #e7c013;
    height: 100%;
  }
`;

export const ItenProducts = styled.li`
  height: 40%;
  width: 40%;
`;

export default ProductsList;
