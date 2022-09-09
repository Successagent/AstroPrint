import React, { useState } from "react";
import CountUp from "react-countup";
import "./Services.css";
function Services() {
  return (
    <div>
      <div className="pushDown"></div>
      <CountUp end={100} />
      <CountUp
        start={0}
        end={100}
        startOnMount={false}
        enableScrollSpy={true}
        scrollSpyDelay={100}
        duration={5}
      >
        {({ countUpRef, start }) => (
          <div>
            <span ref={countUpRef} />
            <button onClick={start}>Start</button>
          </div>
        )}
      </CountUp>
    </div>
  );
}

export default Services;
