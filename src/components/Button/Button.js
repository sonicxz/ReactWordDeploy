import React from "react";
import ButtonCss from "./Button.module.css";
const Button = props => {
  return (
    <button className={ButtonCss.button} onClick={props.click}>
      {props.children}
    </button>
  );
};
export default Button;
