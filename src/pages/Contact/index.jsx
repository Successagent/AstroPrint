import React from "react";

import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Loading from "../../components/HOCs/Loading";

import { FaMapMarkedAlt } from "react-icons/fa";

import "../Contact/Contact.css";
import "../About/About.css";
import Map from "../../components/Map/Map";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="Contact-section">
        <Banner page="Contact" />
        <div className="contact-section-one">
          <div>
            <div>
              <FaMapMarkedAlt></FaMapMarkedAlt>
            </div>
            <h3 className="h3">Locations</h3>
            <p className="h5">
              Kare's Plaza by the Express, Green Villa Road, Biogbolo, Bayelsa
              State
            </p>
          </div>
          <div>
            <div>
              <AiFillPhone></AiFillPhone>
            </div>
            <h3 className="h3">Phone</h3>
            <p className="h5">+2347041620712</p>
          </div>
          <div>
            <div>
              <AiOutlineMail></AiOutlineMail>
            </div>
            <h3 className="h3">Email</h3>
            <p className="h5">Support@astrosoft.io</p>
          </div>
        </div>
        <div className="contact-section-two">
          <h4 className="h4">Contact Us</h4>
          <h2 className="h2">Get In touch</h2>
          <form className="contact-form">
            <div>
              <input type="text" placeholder="Write Your Name" />
            </div>
            <div>
              <input type="phone" placeholder="Write Your Phone Number" />
            </div>
            <div>
              <input type="email" placeholder="Write Your Email" />
            </div>
            <textarea placeholder="Write Your Message"></textarea>
            <button className="faq-section-btn service-btn">
              Send Message
            </button>
          </form>
        </div>
        <div className="contact-section-three">
          <Map />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Loading(Contact);
