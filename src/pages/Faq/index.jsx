import React, { useState } from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";

import Loading from "../../components/HOCs/Loading";

import "../Faq/Faq.css";
import aboutImageFour from "../../assets/Images/img_01-9.jpg";
import aboutImageFive from "../../assets/Images/img_01-2-768x680.jpg";

import { FaPlus, FaMinus } from "react-icons/fa";
import AboutCard from "../../components/Card/AboutCard/AboutCard";

const Faq = ({ toggleActive, active }) => {
  return (
    <>
      <Header />
      <div className="faq-section">
        <Banner page="Faq" />
        <div className="faq-section-one">
          <div>
            <div>
              <div className="about-printing-intro printing-intro">
                <h3 id="tab-1" className="h3" onClick={toggleActive}>
                  What is AstroPrint?
                </h3>
                <div>
                  {active === 0 ? (
                    <FaMinus></FaMinus>
                  ) : active === 1 ? (
                    <FaMinus></FaMinus>
                  ) : (
                    <FaPlus></FaPlus>
                  )}
                </div>
              </div>
              <h5
                className={`h5 ${
                  active === 0
                    ? "increase-height"
                    : active === 1
                    ? "increase-height"
                    : "h5"
                }`}
              >
                AstroPrint is a printing company that provides various printing
                services, including offset printing, digital printing, large
                format printing, and more.
              </h5>
            </div>
            <div>
              <div className="about-printing-intro printing-intro">
                <h3 id="tab-2" className="h3" onClick={toggleActive}>
                  What types of printing services does AstroPrint offer?
                </h3>
                <div>
                  {active === 2 ? <FaMinus></FaMinus> : <FaPlus></FaPlus>}
                </div>
              </div>
              <h5 className={`h5 ${active === 2 ? "increase-height" : "h5"}`}>
                AstroPrint offers a wide range of printing services, including
                business cards, flyers, brochures, banners, posters, booklets,
                and much more.
              </h5>
            </div>
            <div>
              <div className="about-printing-intro printing-intro">
                <h3 id="tab-3" className="h3" onClick={toggleActive}>
                  What is the turnaround time for printing projects at
                  AstroPrint?
                </h3>
                <div>
                  {active === 3 ? <FaMinus></FaMinus> : <FaPlus></FaPlus>}
                </div>
              </div>
              <h5 className={`h5 ${active === 3 ? "increase-height" : "h5"}`}>
                The turnaround time for printing projects at AstroPrint depends
                on the size and complexity of the project. However, the company
                strives to provide fast and efficient services, and turnaround
                times are generally within a few days.
              </h5>
            </div>
          </div>
          <div>
            <div>
              <div className="about-printing-intro printing-intro">
                <h3 id="tab-5" className="h3" onClick={toggleActive}>
                  What is the cost of printing projects at AstroPrint?
                </h3>
                <div>
                  {active === 5 ? <FaMinus></FaMinus> : <FaPlus></FaPlus>}
                </div>
              </div>
              <h5 className={`h5 ${active === 5 ? "increase-height" : "h5"}`}>
                The cost of printing projects at AstroPrint depends on the type
                of printing service, the size and complexity of the project, and
                the quantity ordered. The company offers competitive pricing and
                strives to provide high-quality services at reasonable prices.
              </h5>
            </div>
            <div>
              <div className="about-printing-intro printing-intro">
                <h3 id="tab-6" className="h3" onClick={toggleActive}>
                  What file formats are accepted by AstroPrint?
                </h3>
                <div>
                  {active === 6 ? <FaMinus></FaMinus> : <FaPlus></FaPlus>}
                </div>
              </div>
              <h5 className={`h5 ${active === 6 ? "increase-height" : "h5"}`}>
                AstroPrint accepts a wide range of file formats, including PDF,
                EPS, TIFF, JPEG, and more. However, it is recommended to consult
                with the company to ensure that the file format is compatible
                with their printing equipment.
              </h5>
            </div>
            <div>
              <div className="about-printing-intro printing-intro">
                <h3 id="tab-7" className="h3" onClick={toggleActive}>
                  Can AstroPrint help with designing the artwork for a printing
                  project?
                </h3>
                <div>
                  {active === 7 ? <FaMinus></FaMinus> : <FaPlus></FaPlus>}
                </div>
              </div>
              <h5 className={`h5 ${active === 7 ? "increase-height" : "h5"}`}>
                Yes, AstroPrint has a team of experienced graphic designers who
                can help with designing the artwork for a printing project. The
                company offers design services at an additional cost.
              </h5>
            </div>
          </div>
        </div>
        <div className="service-section-two about-section-three">
          <h4 className="h4">What We Offers</h4>
          <div>
            <h2 className="h2">
              We Provide Lot’s Of Printing & Branding Service
            </h2>
          </div>
          <AboutCard />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Loading(Faq);
