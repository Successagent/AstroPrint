import React from 'react'

import Banner from '../../components/Banner'
import Header from '../../components/Header'
import Footer from "../../components/Footer"


import { FaMapMarkedAlt } from 'react-icons/fa'

import "../Contact/Contact.css"
import "../About/About.css"

const Contact = () => {
  return (
    <>
      <Header />
      <div className="Contact-section">
        <Banner />
        <div className="contact-section-one">
          <div>
            <div>
              <FaMapMarkedAlt></FaMapMarkedAlt>
            </div>
            <h3 className="h3">Locations</h3>
            <p className="h5">2055 Main Street,2nd Floor, E - Block, New York</p>
          </div>
          <div>
            <div>
              <FaMapMarkedAlt></FaMapMarkedAlt>
            </div>
            <h3 className="h3">Locations</h3>
            <p className="h5">2055 Main Street,2nd Floor, E - Block, New York</p>
          </div>
          <div>
            <div>
              <FaMapMarkedAlt></FaMapMarkedAlt>
            </div>
            <h3 className="h3">Locations</h3>
            <p className="h5">2055 Main Street,2nd Floor, E - Block, New York</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Contact
