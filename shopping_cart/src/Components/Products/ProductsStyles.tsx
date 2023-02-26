import styled from 'styled-components';

const ProductsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
  align-items: center;
  background-color: var(--secundary-color);

  li {
    max-width: 40%;
    min-height: 40vh;
  }

  @media (min-width: 768px) {
    background-color: #e7c013;
    height: 100%;
  }
`;

export const ItenProducts = styled.li`
  margin: auto;
  height: 40%;
  width: 40%;
`;

export default ProductsList;
