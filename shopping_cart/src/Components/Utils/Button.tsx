import React from "react";

function Button({text}: {text: string}): JSX.Element {
  return (
    <button>{text}</button>
  )
}

export default Button;
