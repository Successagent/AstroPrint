import React, { useState } from "react";

import mockupImg from "../../assets/mockupImg.png";
import heroImg from "../../assets/hero_img.jpg";
import featuresImg from "../../assets/featuresImg.jpg";
import xpImg from "../../assets/ASTRO LOGO Solo.svg";

import serviceImg from "../../assets/Dtf.jpg";

import Loading from "../../components/HOCs/Loading";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Home.css";

import { FeatureCard, ServiceCard } from "../../components/Card";

function Home() {
  return (
    <>
      <Header />
      <section className="hero">
        <div className="hero__text">
          <h3 className="sect__sub_header">— Welcome to AstroPrint</h3>
          <h1>
            Modern <br />
            Printing <br />
            Agency
          </h1>
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
            <FeatureCard
              title={"Professional Print Services"}
              body="AstroPrint provide professional print services using high-quality printers and advanced printing techniques. This feature would enable the company to produce high-quality print materials for a range of purposes, such as marketing, promotional materials, and signage"
            />
            <FeatureCard
              title={"Customization and Personalization Options"}
              body={
                "AstroPrint offer customization and personalization options for customers. This feature would allow customers to choose from a range of materials, colors, finishes, and printing techniques to create unique and personalized print materials"
              }
            />
          </div>
          <div className="showGrid__row showGrid__row--2 showGrid__row-img">
            <img src={featuresImg} alt="" />
          </div>
          <div className="showGrid__row showGrid__row--3">
            <FeatureCard
              title={"Fast Turnaround Times and Shipping"}
              body={
                "AstroPrint offer fast turnaround times and shipping options to ensure that customers receive their printed materials promptly. This feature would be essential for businesses and individuals who need their printed materials quickly for upcoming events, promotions, or other purposes."
              }
            />
            <FeatureCard
              title={"High-Quality Printing"}
              body={
                "AstroPrint provide the use of advanced printing technology and techniques to ensure that their prints are of high quality. This feature helps to ensure that the printed materials look professional and can leave a lasting impression on the customers."
              }
            />
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
              <img className="wrap-image" src={xpImg} alt="" />
              <p>
                AstroPrint is a printing company that specializes in providing
                solutions for 3D printing enthusiasts, professionals, and
                businesses. The company was founded in 2022 with the mission of
                making 3D printing accessible to everyone, regardless of their
                technical background.
              </p>
            </div>
            <div className="sect__text--col">
              <p className="text--gray">
                Astroprint offers a range of software and hardware solutions
                that streamline the 3D printing process, making it easier and
                more efficient for users. Their flagship product is the
                Astroprint Cloud, a cloud-based platform that allows users to
                manage their 3D printers remotely from anywhere in the world.
                The platform supports a wide range of 3D printers, including
                those from popular brands such as Ultimaker, Prusa, and
                Creality.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sect">
        <h3 className="sect__sub_header">What we Offer</h3>
        <h2 className="sect__header">
          We provide lots of printing & branding services
        </h2>
        <div className="showGrid">
          <div className="showGrid__row showGrid__row--1">
            <ServiceCard
              title={"Monogramming Machine"}
              body={
                "AstroPrint provides monogramming machine is a specialized sewing machine designed to create monograms and other types of embroidery."
              }
            />
            <ServiceCard
              title={"DTF"}
              body={
                "AstroPrint uses DTF printing for creating custom apparel, including t-shirts, hats, and other clothing items."
              }
            />
          </div>
          <div className="showGrid__row showGrid__row--2">
            <img src={serviceImg} alt="" />
            <div className="">
              <h3>Design & Branding</h3>
              <p>
                AstroPrint is a printing company that specializes in providing
                solutions for 3D printing enthusiasts, professionals, and
                businesses
              </p>
            </div>
          </div>
          <div className="showGrid__row showGrid__row--3">
            <ServiceCard
              title={"Photo Printer"}
              body={
                "AstroPrint Photo Printer is the printer designed specifically for printing high-quality photos. "
              }
            />
            <ServiceCard
              title={"Heat Press Machine"}
              body={
                "AstroPrint Heat Press Machines are commonly used in the garment industry for producing custom t-shirts, bags, hats, and other items."
              }
            />
          </div>
        </div>
      </section>
      <section className="sect sect--row sect--blue">
        <div className="sect__text">
          <h3 className="sect__sub_header">Need any help</h3>
          <h2 className="sect__header">Why people choose AstroPrint</h2>
          <p>
            AstroPrint offers a wide range of features and tools designed to
            make printing easier and more efficient. These include cloud
            slicing, print management and monitoring, access to a vast library
            of pre-sliced 3D models, and the ability to share models with
            others.
          </p>
        </div>
        <div className="sect__img">
          <img src={mockupImg} alt="" />
        </div>
      </section>

      <section className="sect sect--row-reverse">
        <div className="sect__text">
          <h3 className="sect__sub_header">What we Do</h3>
          <h2 className="sect__header">Why people choose AstroPrint</h2>
          <p>
            AstroPrint is dedicated to helping individuals and organizations
            achieve their printing goals with ease and efficiency. Whether
            you're a hobbyist or a professional, our platform is designed to
            simplify the printing process and make it accessible to everyone.
          </p>
          <ul>
            <li>Professional & Experienced</li>
            <li>Low Cost & Digital Printing Agency</li>
            <li>Pixel Perfect and Accurate Printing</li>
            <li>Transport & Low Transportations Cost</li>
            <li>Exclusive Team Members</li>
          </ul>
        </div>
        <div className="sect__img">
          <img src={mockupImg} alt="" />
        </div>
      </section>
      <section className="sect">
        <h3 className="sect__sub_header">Our Recent Works</h3>
        <h2 className="sect__header">Let's See our latest projects</h2>
        <div className="work_grid">
          <div className="work"></div>
          <div className="work"></div>
          <div className="work"></div>
          <div className="work"></div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Loading(Home);
