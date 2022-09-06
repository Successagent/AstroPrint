import React, { useState } from "react";
import ButtonStyles from "./Button.module.css";

function SmallButton({ children }) {
  return <button className={ButtonStyles.button}>{children}</button>;
}

export default SmallButton;
