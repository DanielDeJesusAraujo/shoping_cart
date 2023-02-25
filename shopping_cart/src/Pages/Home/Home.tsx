import React from "react";
import { Header, Aside, Products } from '../../Components'
import Main from './HomeStyle';

function HomePage(): JSX.Element {

  return (
    <Main>
      <Header />
      <Aside />
      <Products />
    </Main>
  )
}

export default HomePage;
