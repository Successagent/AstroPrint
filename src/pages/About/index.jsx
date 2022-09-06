import React, { useState } from 'react'
import Header from '../../components/Header'
import '../About/style.css'
import aboutImageOne from '../../assets/Images/img_01.png'
import aboutImageTwo from '../../assets/Images/reward.png'
import aboutImageThree from '../../assets/Images/iso.png'
import AboutCard from '../../components/Card/AboutCard/AboutCard'
import MemberCard from '../../components/Card/MemberCard'

function About() {
  return (
    <>
      <Header />
      <div className="about-section">
        <div className="about-section-one">
          <h2>About</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
          </ul>
        </div>
        <div className="about-section-two">
          <div>
            <img src={aboutImageOne} alt="" />
          </div>
          <div>
            <div>
              <h4>About Our Company</h4>
              <h1>Printing Your Dream Works With Printem</h1>
            </div>
            <p>
              About Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accu santium doloremque laudantium, totam rem aperiam,
              eaque ipquae ab illo inventore veritatis et quasi architecto
              beatae
            </p>
            <h5>
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
                  <h3>ISO Certified</h3>
                  <h5>
                    ISO Certified Denouncing pleasure and praising pain was born
                  </h5>
                </div>
              </div>
              <div>
                <img src={aboutImageThree} alt="" />
                <div>
                  <h3>Award Wins</h3>
                  <h5>Denouncing pleasure and praising pain was bor</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-section-three">
          <h4>What We Offers</h4>
          <div>
            <h2>We Provide Lot’s Of Printing & Branding Service</h2>
          </div>
          <AboutCard />
        </div>
        <div className="about-section-four">
          <h4>What We Offers</h4>
          <div>
            <h2>We Provide Lot’s Of Printing & Branding Service</h2>
            <MemberCard/>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
