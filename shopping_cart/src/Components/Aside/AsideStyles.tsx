import styled from 'styled-components';

const MainCategorys = styled.ul`
  display: none;

  @media (min-width: 768px) {
    background-color: #f19041;
    height: 100%;
    grid-row-start: 2;
    display: inline;
  }
`;

export const ItenCategory = styled.li`
  height: 60px;
  text-align: center;
  max-width: 300px;
  border-radius: 20px;
  width: auto;
  margin: 5px;
  background-color: green;
`;

export default MainCategorys;
