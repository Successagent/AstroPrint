import React, { useState } from "react";
import ButtonStyles from "./Button.module.css";

function Button({ children, className }) {
  return (
    <button className={`${ButtonStyles.button} ${className}`}>
      <p>{children}</p>
      <div className={ButtonStyles.arrowContainer}></div>
    </button>
  );
}

export default Button;
