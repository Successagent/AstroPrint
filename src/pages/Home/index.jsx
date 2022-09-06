import React, { useState } from "react";
import heroImg from "../../assets/hero_img.jpg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";
import Button from "../../components/Button/index";

function Home() {
  return (
    <>
      <Header />
      <section className="hero">
        <div className="hero__text">
          <h3 className="sect__sub_header">Welcome to AstroPrint</h3>
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
      <section>
        <h3 className="sect__sub_header">Our Core Features</h3>
        <h2 className="sect__header">Experience Allows Us to Print things</h2>
        <div>
          <p>Printing</p>
          <img src="" alt="" />
        </div>
      </section>
      <section>
        <h3 className="sect__sub_header">About our company</h3>
        <h2 className="sect__header">
          Printing your dream works with AstroPrint
        </h2>
        <div>
          <p>Printing</p>
          <img src="" alt="" />
        </div>
      </section>
      <section>
        <h3 className="sect__sub_header">What we Offer</h3>
        <h2 className="sect__header">
          We provide lots of printing & branding services
        </h2>
        <div>
          <p>Printing</p>
          <img src="" alt="" />
        </div>
      </section>
      <section>
        <h3 className="sect__sub_header">Need any help</h3>
        <h2 className="sect__header">Why people choose AstroPrint</h2>
        <div>
          <p>Printing</p>
          <img src="" alt="" />
        </div>
      </section>
      <section>
        <h3 className="sect__sub_header">Need any help</h3>
        <h2 className="sect__header">Why people choose AstroPrint</h2>
        <div>
          <p>Printing</p>
          <img src="" alt="" />
        </div>
      </section>
      <section>
        <h3 className="sect__sub_header">Our Recent Works</h3>
        <h2 className="sect__header">Let's See our latest projects</h2>
        <div>
          <p>Printing</p>
          <img src="" alt="" />
        </div>
      </section>
      <section>
        <h3 className="sect__sub_header">👌</h3>
        <h2 className="sect__header">What our clients say</h2>
        <h2 className="sect__header">Reviews</h2>
        <div>
          <p>Printing</p>
          <img src="" alt="" />
        </div>
      </section>
      <section>
        <h3 className="sect__sub_header">Latest News & blog</h3>
        <h2 className="sect__header">Get More Updates for news & articles</h2>
        <h2 className="sect__header--bg">Reviews</h2>
        <div>
          <p>Printing</p>
          <img src="" alt="" />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
