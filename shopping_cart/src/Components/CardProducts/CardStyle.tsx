import styled from 'styled-components';

const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: radial-gradient(circle, #ffd2b8, #ffffff);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: var(--my-border-radius);
  /* padding: 10px; */
  width: 150px;
  min-height: 45vh;

  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-4px);
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  margin-bottom: 16px;
  border-radius: var(--my-border-radius);
  /* border-end-end-radius: var(--my-border-radius);
  border-end-start-radius: var(--my-border-radius); */
`;

export const Infos = styled.section`
 .title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
 }
  /* display: flex;
  flex-direction: column;
  align-content: space-between;
  */
  .price {
    font-size: 16px;
    font-weight: bold;
    color: #28be28;
  } 
`;

export default Li;
