import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCalendar,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import { FiArrowRight } from "react-icons/fi";
import "../../pages/About/About.css";
import { Button, SmallButton } from "../Button";

import footerLogoOne from "../../assets/Images/logo-black.png";
import footerLogoTwo from "../../assets/Images/img_05.png";
import footerLogoThree from "../../assets/Images/img_07.png";
import footerLogoFour from "../../assets/Images/img_08.png";
import footerLogoFive from "../../assets/Images/img_05.png";
import footerLogoSix from "../../assets/Images/img_03-150.jpg";
import footerLogoSeven from "../../assets/Images/img_02-150.jpg";

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
            <FaFacebookF></FaFacebookF>
          </div>
          <div>
            <FaTwitter></FaTwitter>
          </div>
          <div>
            <FaLinkedinIn></FaLinkedinIn>
          </div>
          <div>
            <FaInstagram></FaInstagram>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
