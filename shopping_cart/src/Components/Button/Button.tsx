import React from "react";
import { BiSearch } from "react-icons/bi";
import SearchButton from "./ButtonStyle";

function Button({content}: {content: string | React.ReactElement}): JSX.Element {
  return (
    <SearchButton>
      {content}
    </SearchButton>
  )
}

export default Button;
