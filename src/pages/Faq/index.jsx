import React from 'react'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header'

import '../Faq/Faq.css'
import aboutImageFour from '../../assets/Images/img_01-9.jpg'
import aboutImageFive from '../../assets/Images/img_01-2-768x680.jpg'

import { FaPlus, FaMinus } from 'react-icons/fa'
import AboutCard from '../../components/Card/AboutCard/AboutCard'

const Faq = () => {
  return (
    <>
      <Header />
      <div className="faq-section">
        <Banner />
        <div className="faq-section-one">
          <div>
            <div className="about-printing-intro printing-intro">
              <h3 className="h3">What we do for Printing Business</h3>
              <FaMinus></FaMinus>
            </div>
            <h5 className="h5">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer
            </h5>
            <div className="about-printing-intro printing-intro">
              <h3 className="h3">What we do for Printing Business</h3>
              <FaMinus></FaMinus>
            </div>
            <div className="about-printing-intro printing-intro">
              <h3 className="h3">What we do for Printing Business</h3>
              <FaMinus></FaMinus>
            </div>
            <div className="about-printing-intro printing-intro">
              <h3 className="h3">What we do for Printing Business</h3>
              <FaMinus></FaMinus>
            </div>
          </div>
          <div>
            <div className="about-printing-intro printing-intro">
              <h3 className="h3">What we do for Printing Business</h3>
              <FaMinus></FaMinus>
            </div>
            <h5 className="h5">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer
            </h5>
            <div className="about-printing-intro printing-intro">
              <h3 className="h3">What we do for Printing Business</h3>
              <FaMinus></FaMinus>
            </div>
            <div className="about-printing-intro printing-intro">
              <h3 className="h3">What we do for Printing Business</h3>
              <FaMinus></FaMinus>
            </div>
            <div className="about-printing-intro printing-intro">
              <h3 className="h3">What we do for Printing Business</h3>
              <FaMinus></FaMinus>
            </div>
          </div>
        </div>
        <div className="faq-section-two about-section-five">
          <div className="faq-section-two-part-one about-section-five-part-one">
            <div>
              <img src={aboutImageFour} alt="" />
            </div>
            <div>
              <h4 className="h4">Leave A Message</h4>
              <h2 className="h2">Have Any Questions For Printing ?</h2>
              <form className="faq-form">
                <div>
                  <input type="text" placeholder="Enter your Full Name" />
                </div>
                <div>
                  <input type="email" placeholder="Enter Email Address" />
                </div>
                <textarea placeholder='Message'></textarea>
                <button className='faq-section-btn'>Send Message</button>
              </form>
            </div>
          </div>
          <div className="faq-section-two-part-two about-section-five-part-two">
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
                      <h3 className="h3">Printing & Branding</h3>
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
  )
}

export default Faq
