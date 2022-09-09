import React, { useState } from "react";
import CountUp from "react-countup";
import "./Services.css";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import CounterCard from "../../components/Card/CounterCard";

function Services() {
  return (
    <>
      <Header />
      <Banner />
      <div className="pushDown"></div>
      <div className="">
        <CounterCard />
        <CounterCard />
        <CounterCard />
      </div>
    </>
  );
}

export default Services;
