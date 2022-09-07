import React, { useState } from "react";

import mockupImg from "../../assets/mockupImg.png";
import heroImg from "../../assets/hero_img.jpg";
import featuresImg from "../../assets/featuresImg.jpg";
import xpImg from "../../assets/25years.png";
import serviceImg from "../../assets/serviceImg.jpg";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";
import Button from "../../components/Button/";
import { FeatureCard, ServiceCard, PostCard } from "../../components/Card";

function Home() {
  return (
    <>
      <Header />
      <section className="hero">
        <div className="hero__text">
          <h3 className="sect__sub_header">— Welcome to AstroPrint</h3>
          <h1>
            {" "}
            Modern
            <br />
            Printing
            <br />
            Agency
          </h1>
          <Button>Discover More</Button>
        </div>
        <div className="hero__img">
          <img src={heroImg} alt="" />
        </div>
      </section>
      <section className="sect">
        <h3 className="sect__sub_header">Our Core Features</h3>
        <h2 className="sect__header">Experience Allows Us to Print things</h2>
        <div className="showGrid">
          <div className="showGrid__row showGrid__row--1">
            <FeatureCard />
            <FeatureCard />
          </div>
          <div className="showGrid__row showGrid__row--2">
            <img src={featuresImg} alt="" />
          </div>
          <div className="showGrid__row showGrid__row--3">
            <FeatureCard />
            <FeatureCard />
          </div>
        </div>
      </section>
      <section className="sect">
        <h3 className="sect__sub_header">About our company</h3>
        <h2 className="sect__header">
          Printing your dream works with AstroPrint
        </h2>
        <div className="sect sect--row sect--row_start">
          <div className="sect__img">
            <img src={featuresImg} alt="" />
          </div>
          <div className="sect__text">
            <div className="sect__text--row">
              <img src={xpImg} alt="" />
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantiu dolorem laudantium, totam rem aper iam eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beataese
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                volupta
              </p>
            </div>
            <div className="sect__text--col">
              <p className="text--gray">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantiu dolorem laudantium, totam rem aper iam eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beataese
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                volupta{" "}
              </p>
            </div>
          </div>
          {/* TODO: Add the quote from the template */}
        </div>
      </section>
      <section className="sect">
        <h3 className="sect__sub_header">What we Offer</h3>
        <h2 className="sect__header">
          We provide lots of printing & branding services
        </h2>
        <div className="showGrid">
          <div className="showGrid__row showGrid__row--1">
            <ServiceCard />
            <ServiceCard />
          </div>
          <div className="showGrid__row showGrid__row--2">
            <img src={serviceImg} alt="" />
            <div className="">
              <h3>Design & Branding</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantiumse totam rem aperiam eaque ipsa
                quae abillo{" "}
              </p>
              <a href="http://">Read More</a>
            </div>
          </div>
          <div className="showGrid__row showGrid__row--3">
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
      </section>
      <section className="sect sect--row sect--blue">
        <div className="sect__text">
          <h3 className="sect__sub_header">Need any help</h3>
          <h2 className="sect__header">Why people choose AstroPrint</h2>
          <p>
            Quote Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo{" "}
          </p>
          <Button>Meet with us</Button>
        </div>
        <div className="sect__img">
          <img src={mockupImg} alt="" />
        </div>
      </section>

      <section className="sect sect--row-reverse">
        <div className="sect__text">
          <h3 className="sect__sub_header">What we Do</h3>
          <h2 className="sect__header">Why people choose AstroPrint</h2>
          {/* TODO: Enlarge first letter */}
          <p>
            Sed ut perspiciatis unde omnis iste natus erroluptatem accusantium
            doloremque laudantium, totam rem aeaque ipsa quae ab illo inventore
            veritatis et quasi{" "}
          </p>
          <ul>
            <li>Professional & Experienced</li>
            <li>Low Cost & Digital Printing Agency</li>
            <li>Pixel Perfect and Accurate Printing</li>
            <li>Transport & Low Transportations Cost</li>
            <li>Exclusive Team Members</li>
          </ul>
          <Button>Learn more</Button>
        </div>
        <div className="sect__img">
          <img src={mockupImg} alt="" />
        </div>
      </section>
      <section className="sect">
        <h3 className="sect__sub_header">Our Recent Works</h3>
        <h2 className="sect__header">Let's See our latest projects</h2>
        <div>
          <p>Printing</p>
          <img src="" alt="" />
        </div>
      </section>
      <section className="sect">
        <h3 className="sect__sub_header">👌</h3>
        <h2 className="sect__header">What our clients say</h2>
        <h2 className="sect__header">Reviews</h2>
        <div>
          <p>Printing</p>
          <img src="" alt="" />
        </div>
      </section>
      <section className="sect">
        <h3 className="sect__sub_header">Latest News & blog</h3>
        <h2 className="sect__header">Get More Updates for news & articles</h2>
        <h2 className="sect__header--bg">Blog</h2>
        <div>
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
