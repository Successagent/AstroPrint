import React, { useEffect } from "react";
import Loading from "../../components/HOCs/Loading";

import AboutCard from "../../components/Card/AboutCard/AboutCard";
import ReviewsCard from "../../components/Card/ReviewsCard/ReviewsCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import serviceLogoOne from "../../assets/Images/img_02-3.png";

import { FaCube, FaLaptopCode } from "react-icons/fa";
import {
  FiArrowRight,
  FiCheck,
  FiPrinter,
  FiSettings,
  FiHeart,
  FiTruck,
} from "react-icons/fi";

import "../Services/Service.css";
import "../About/About.css";
import Banner from "../../components/Banner";
import Aos from "aos";
import "aos/dist/aos.css";

function Services() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Header />
      <div className="service-section">
        <Banner page="Services" />
        <div className="service-sec-one">
          <div className="service-sec-one-item-one">
            <div className="">
              <h4 className="h4">Our Core Features</h4>
              <h2 data-aos="fade-up" className="h2">
                Explore Every Features
              </h2>
            </div>
            <h5 className="h5 ">
              AstroPrint gives you the best of the best for any of your
              printing.
            </h5>
            <button className="service-btn ">
              DISCOVER MORE
              <div className="section-icon">
                <FiArrowRight></FiArrowRight>
              </div>
            </button>
          </div>
          <div className="service-sec-one-item-two">
            <div>
              <div>
                <h3 className="h3">Printing Services</h3>
                <h5 className="h5">
                  AstroPrint Printing could offer printing services for various
                  documents such as business cards, flyers, brochures, and other
                  promotional materials.
                </h5>
              </div>
            </div>
            <div>
              <div>
                <h3 className="h3">Design Services</h3>
                <h5 className="h5">
                  The company provide design services to create custom graphics
                  and layouts for printed materials, ensuring that they are
                  visually appealing and effective.
                </h5>
              </div>
            </div>
            <div>
              <div>
                <h3 className="h3">Competitive Pricing</h3>
                <h5 className="h5">
                  The company offer competitive pricing for their printing and
                  design services to remain competitive in the market.
                </h5>
              </div>
            </div>
            <div>
              <div>
                <h3 className="h3">Customer Service</h3>
                <h5 className="h5">
                  The company could provide excellent customer service,
                  including responsive communication, timely delivery, and the
                  ability to handle any issues or concerns that may arise.
                </h5>
              </div>
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
        <div className="service-section-three">
          <div>
            <img src={serviceLogoOne} alt="" />
          </div>
          <div data-aos="fade-up" className="service-section-three-part-two ">
            <h4 className="h4">Needs Any Helps</h4>
            <h2 className="h2">Always Ready To Print Your Dream Works</h2>
            <h5 className="h5">
              Create a frequently asked questions (FAQ) section on the
              AstroPrint website. This section should address common user
              questions and provide clear and concise answers.
            </h5>

            <button className="service-btn">
              Meet with us
              <div className="section-icon">
                <FiArrowRight></FiArrowRight>
              </div>
            </button>
          </div>
        </div>

        <div className="about-section-six">
          <h4 className="h4">Clients Reviews</h4>
          <div>
            <h2 className="h2">What Our Clients Say About Our Works</h2>
          </div>
          <ReviewsCard />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Loading(Services);
