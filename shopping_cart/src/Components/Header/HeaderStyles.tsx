import styled from 'styled-components';

const MainHeader = styled.header`
  position: fixed;
  top: 0;
  min-height: 9vh;
  background-image: radial-gradient(circle, #ffd6d6, #ffdab0);
  box-shadow: 0px 2px 9px 5px #0000004c;
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
