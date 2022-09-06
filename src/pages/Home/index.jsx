import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";

function Home() {
  return (
    <>
      <Header />
      <section className="hero">
        <div className="hero__text">
          <h3 className="sect__sub_header">Welcome to AstroPrint</h3>
          <h1> Modern Printing Agency</h1>
        </div>
        <div className="hero__img">k</div>
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
