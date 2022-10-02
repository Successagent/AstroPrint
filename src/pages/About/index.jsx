import React, { useEffect, useRef } from 'react'
import Header from '../../components/Header'
import '../About/About.css'

import Loading from '../../components/HOCs/Loading'
import { FaMinus, FaPlus } from 'react-icons/fa'

import aboutImageOne from '../../assets/Images/img_01.png'
import aboutImageTwo from '../../assets/Images/reward.png'
import aboutImageThree from '../../assets/Images/iso.png'
import aboutImageFour from '../../assets/Images/img_01-9.jpg'
import aboutImageFive from '../../assets/Images/img_01-2-768x680.jpg'
import AboutCard from '../../components/Card/AboutCard/AboutCard'
import MemberCard from '../../components/Card/MemberCard'
import ReviewsCard from '../../components/Card/ReviewsCard/ReviewsCard'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import Aos from 'aos'
import 'aos/dist/aos.css'

function About({ toggleActive, active }) {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
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
              About Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accu santium doloremque laudantium, totam rem aperiam,
              eaque ipquae ab illo inventore veritatis et quasi architecto
              beatae
            </p>
            <h5 className="h5">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system and expound the actual teachings of the
              great explorer of the truth, the master-build human happiness. No
              one rejects, dislikes, or avoids pleasure
            </h5>
            <div className="about-part-two-footer">
              <div>
                <img src={aboutImageTwo} alt="" />
                <div>
                  <h3 className="h3">ISO Certified</h3>
                  <h5 className="h5">
                    ISO Certified Denouncing pleasure and praising pain was born
                  </h5>
                </div>
              </div>
              <div>
                <img src={aboutImageThree} alt="" />
                <div>
                  <h3 className="h3">Award Wins</h3>
                  <h5 className="h5">
                    Denouncing pleasure and praising pain was bor
                  </h5>
                </div>
              </div>
            </div>
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
        <div className="about-section-five">
          <div className="about-section-five-part-one">
            <div>
              <img src={aboutImageFour} alt="" />
            </div>
            <div data-aos="fade-up">
              <div>
                <h4 className="h4">Faq</h4>
                <h2 className="h2">Frequently Asked Questions</h2>
              </div>
              <div>
                <div>
                  <div className="about-printing-intro printing-intro">
                    <h3 id="tab-1" className="h3" onClick={toggleActive}>
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
                    <h3 id="tab-2" className="h3" onClick={toggleActive}>
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
        </div>
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
  )
}

export default Loading(About)
