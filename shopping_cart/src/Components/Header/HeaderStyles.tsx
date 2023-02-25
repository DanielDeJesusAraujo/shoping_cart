import styled from 'styled-components';

const MainHeader = styled.header`
  min-height: 9vh;
  background-color: #1852a8ea;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 768px) {
    grid-column-start: 1;
    grid-column-end: 3;
    height: 100%;
    width: auto;
    background-color: #1852a8ea;
  }
`;

export const SearchContainer = styled.div`

`;

export const IconsContainer = styled.nav`
  background-color: orange;
`;

export const Logo = styled.img`
  height: 15%;
  width: 15%;
`;

export default MainHeader;
