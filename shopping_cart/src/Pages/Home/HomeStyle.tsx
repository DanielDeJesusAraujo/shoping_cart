import styled from 'styled-components';

const Main = styled.main`
  background-color: #1852a8ea;

  @media (min-width: 768px) {
    padding: 5px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 4fr;
    grid-gap: 5px;
    height: 100vh;
    background-color: #f3ab3f;
  }
`;

export default Main;