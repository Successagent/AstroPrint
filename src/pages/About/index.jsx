import React, { useEffect } from "react";

import "../About/About.css";

import Loading from "../../components/HOCs/Loading";

import aboutImageOne from "../../assets/Images/img_01.png";

import AboutCard from "../../components/Card/AboutCard/AboutCard";
import MemberCard from "../../components/Card/MemberCard";
import ReviewsCard from "../../components/Card/ReviewsCard/ReviewsCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner";
import Aos from "aos";
import "aos/dist/aos.css";

function About({}) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Header />
      <div className="about-section">
        <Banner />
        <div className="sect sect--row">
          <div>
            <img src={aboutImageOne} alt="" />
          </div>
          <div data-aos="fade-up">
            <div className="boxes">
              <h4 className="h4">About Our Company</h4>
              <h1 className="h2">Printing Your Dream Works With Printem</h1>
            </div>
            <p className="p">
              Astroprint is a printing company that specializes in providing
              solutions for 3D printing enthusiasts, professionals, and
              businesses. The company was founded in 2022 with the mission of
              making 3D printing accessible to everyone, regardless of their
              technical background.
            </p>
            <h5 className="h5">
              Astroprint is a comprehensive printing company under AstroSoft
              Group that simplifies the entire printing process. Its remote
              monitoring, slicing, file management, compatibility, and ease of
              use features make it a valuable tool for both novice and
              experienced printing enthusiasts. With Astroprint, you can take
              your printing projects to the next level, making it easier than
              ever to bring your ideas to life.
            </h5>
          </div>
        </div>
        <div className="about-section-three">
          <h4 className="h4">What We Offers</h4>
          <div>
            <h2 className="h2">
              We Provide Lot’s Of Printing & Branding Service
            </h2>
          </div>
          <AboutCard />
        </div>
        <div className="about-section-four">
          <h4 className="h4">What We Offers</h4>
          <div>
            <h2 className="h2">Meet Our Exclusive Team Members</h2>
            <MemberCard />
          </div>
        </div>
        {/* <div className="about-section-five">
          <div className="about-section-five-part-one">
            <div>
              <img src={aboutImageFour} alt="" />
            </div>
            <div data-aos="fade-up">
              <div>
                <h4 className="h4">Faq</h4>
                <h2 className="h2">Frequently Asked Questions</h2>
              </div>
              <div className="tab-content-con">
                <div>
                  <div className="about-printing-intro printing-intro">
                    <h3 id="tab-1" onClick={toggleActive}>
                      What we do for Printing Business
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
                        ? 'increase-height'
                        : active === 1
                        ? 'increase-height'
                        : 'h5'
                    }`}
                  >
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer
                  </h5>
                </div>
                <div>
                  <div className="about-printing-intro printing-intro">
                    <h3 id="tab-2" onClick={toggleActive}>
                      What we do for Printing Business
                    </h3>
                    <div>
                      {active === 2 ? <FaMinus></FaMinus> : <FaPlus></FaPlus>}
                    </div>
                  </div>
                  <h5
                    className={`h5 ${active === 2 ? 'increase-height' : 'h5'}`}
                  >
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer
                  </h5>
                </div>
                <div>
                  <div className="about-printing-intro printing-intro">
                    <h3 id="tab-3" onClick={toggleActive}>
                      What we do for Printing Business
                    </h3>
                    <div>
                      {active === 3 ? <FaMinus></FaMinus> : <FaPlus></FaPlus>}
                    </div>
                  </div>
                  <h5
                    className={`h5 ${active === 3 ? 'increase-height' : 'h5'}`}
                  >
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="about-section-five-part-two">
            <div>
              <h4 className="h4">Our Skills</h4>
              <h2 className="h2">Professional Skills For Printing</h2>
              <h5 className="h5">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremqe laudantium totam rem aperiam eaque ipsa
                quae abillo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo.
              </h5>
              <div className="circle-con">
                <div className="circle-con-items">
                  <div>
                    <h2 className="h2">75%</h2>
                  </div>
                  <div className="about-branding-design-con">
                    <div>
                      <h3 className="h3">Printing & Design</h3>
                      <h5 className="h5">
                        Sed ut perspiciatis unde omnis natus error sit
                        voluptatem
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="circle-con-items">
                  <div>
                    <h2 className="h2">85%</h2>
                  </div>
                  <div className="about-branding-design-con">
                    <div>
                      <h3 className="h3">Printing & Design</h3>
                      <h5 className="h5">
                        Sed ut perspiciatis unde omnis natus error sit
                        voluptatem
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src={aboutImageFive} alt="" />
            </div>
          </div>
        </div> */}
        <div className="about-section-six">
          <h4 className="h4">Clients Reviews</h4>
          <div>
            <h2 className="h2">What Our Clients Say About Our Works</h2>
          </div>
          <ReviewsCard />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Loading(About);
