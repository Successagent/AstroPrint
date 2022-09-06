import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderStyles from "./header.module.css";
import { Button, SmallButton } from "../Button";

function Header() {
  return (
    <header className={HeaderStyles.header}>
      <div className={HeaderStyles.logo}>Astro</div>

      <ul className={HeaderStyles.links}>
        <Link to={"/"}>
          <li className={HeaderStyles.link}>Home</li>
        </Link>
        <Link to={"/about"}>
          <li className={HeaderStyles.link}>About</li>
        </Link>
        <Link to={"/services"}>
          <li className={HeaderStyles.link}>Services</li>
        </Link>
      </ul>

      <div className={HeaderStyles.buttonSet}>
        <SmallButton>Q</SmallButton>
        <Button>Get A Quote</Button>
      </div>
    </header>
  );
}

export default Header;
