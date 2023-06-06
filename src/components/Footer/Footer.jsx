import React from "react";
import { Link } from "react-router-dom";
import {
  FaPinterestP,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import { FiArrowRight } from "react-icons/fi";
import "../../pages/About/About.css";
import { SmallButton } from "../Button";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-item-two">
        <ul>
          <h3 className="h3">Quick Links.</h3>
          <li className="h5">
            <Link to="/services">Services</Link>
          </li>
          <li className="h5">
            <Link to="/about">About</Link>
          </li>
          <li className="h5">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="h5">
            <Link to="/faq">Faq</Link>
          </li>
        </ul>
        <ul>
          <h3 className="h3">Address.</h3>
          <li className="h5">
            Kare's Plaza, by the Express, Green Villa Road, Biogbolo, Bayelsa
            State
          </li>
        </ul>
        <div className="footer-contact-sec">
          <h3 className="h3">Contact Us</h3>
          <h5 className="h5">Feel free to contact us</h5>
          <a href="mailto:support@astrosoft.com">Support</a>
          <form className="footer-form">
            <input type="email" placeholder="Enter Your Email" />
            <SmallButton>
              <FiArrowRight />
            </SmallButton>
          </form>
          <div className="footer-contact-section-last-item">
            <FaPhone className="footer-phone"></FaPhone>
            <h5 className="h5">+2347041620712</h5>
          </div>
        </div>
      </div>
      <div className="footer-last-item">
        <p className="p">Copyright ©2022 Astrosoft. All Rights Reserved</p>
        <div className="footer-last-item-child-two">
          <div>
            <a
              target="_blank"
              href="https://www.facebook.com/astrosoftng?mibextid=ZbWKwL"
            >
              <FaFacebookF></FaFacebookF>
            </a>
          </div>
          <div>
            <a target="_blank" href="https://twitter.com/Astrosoftio?s=20">
              <FaTwitter></FaTwitter>
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/astrosoftng/mycompany/"
            >
              <FaLinkedinIn></FaLinkedinIn>
            </a>
          </div>
          <div>
            <a target="_blank" href="https://www.instagram.com/astroprints.io/">
              <FaInstagram></FaInstagram>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
