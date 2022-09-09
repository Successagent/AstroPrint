import React, { useState, useRef } from "react";
import CountUp, { useCountUp } from "react-countup";
import CounterCardStyles from "./CounterCard.module.css";

function CounterCard({ count, icon, title }) {
  const countUpRef = useRef(null);
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: count || 123,
    duration: 4,
    startOnMount: false,
    enableScrollSpy: true,
    scrollSpyDelay: 100,
  });
  return (
    <div className={CounterCardStyles.container}>
      <div>
        <div>
          <img src={icon || ""} alt="" />
        </div>
      </div>
      <span ref={countUpRef} />
      <p>{title || "Counter"}</p>
    </div>
  );
}

export default CounterCard;
