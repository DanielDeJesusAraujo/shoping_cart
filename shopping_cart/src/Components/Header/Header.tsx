import React, { ChangeEvent } from "react";
import Button from '../Button/Button'
import SearchInput from "../SearchBox/ButtonStyles";
import MainHeader, { Logo, SearchContainer } from "./HeaderStyles";
import { BiCart, BiMenu, BiSearch } from 'react-icons/bi';
import logo from '../../assets/logo.svg'

function Header(): JSX.Element {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e;
    console.log(value)
  }

  return (
    <MainHeader>
      <Logo src={logo} alt="logo" />
      <SearchContainer>
        <SearchInput placeholder="Pesquisar" onChange={handleChange} />
        <Button content={<BiSearch />} />
      </SearchContainer>
      <BiMenu size={'10%'} />
      <BiCart size={'10%'} />
    </MainHeader>
  )
}

export default Header;