import React, { useState } from "react";
import HeaderStyles from "./styles.css";

function Header() {
  return (
    <header>
      <div className={HeaderStyles.logo}>Astro</div>

      <ul className={HeaderStyles.links}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
      </ul>

      <div className={HeaderStyles.buttonSet}>
        <button>A</button>
        <button>B</button>
      </div>
    </header>
  );
}

export default Header;
