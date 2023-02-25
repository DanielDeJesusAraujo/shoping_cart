import styled from 'styled-components';

const SearchButton = styled.button`
  border: none;
  padding: 15px;
  border-radius: 0px 5px 5px 0px;
  display: none;

  @media (min-width: 768px) {
    display: inline;
  }
`;

export default SearchButton;