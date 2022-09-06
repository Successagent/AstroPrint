import React, { useState } from "react";
import "./styles.css";

function Header() {
  return (
    <header>
      <div className="logo">Astro</div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
      </ul>

      <div className="button_set">
        <button>A</button>
        <button>B</button>
      </div>
    </header>
  );
}

export default Header;
