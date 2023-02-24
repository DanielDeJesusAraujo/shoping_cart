import React, { ChangeEvent } from "react";
import Button from "../SearchButton/Button";
import { SearchInput } from "../SearchButton/ButtonStyles";
import MainHeader from "./HeaderStyles";

function Header(): JSX.Element {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e;
  }

  return (
    <MainHeader>
      <SearchInput placeholder="buscar..." onChange={handleChange} />
      <Button text={'buscar'} />
    </MainHeader>
  )
}

export default Header;