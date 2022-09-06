import React, { useState } from "react";
import HeaderStyles from "./header.module.css";
import { Button, SmallButton } from "../Button";

function Header() {
  return (
    <header className={HeaderStyles.header}>
      <div className={HeaderStyles.logo}>Astro</div>

      <ul className={HeaderStyles.links}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
      </ul>

      <div className={HeaderStyles.buttonSet}>
        <SmallButton>Q</SmallButton>
        <Button>Get A Quote</Button>
      </div>
    </header>
  );
}

export default Header;
