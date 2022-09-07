import React, { useState } from "react";
import FeatureCardStyles from "./FeatureCard.module.css";

function FeatureCard() {
  return (
    <div className={FeatureCardStyles.container}>
      <div className={FeatureCardStyles.icon}></div>
      <div className={FeatureCardStyles.text}>
        <h3 className={FeatureCardStyles.title}>Printing & Press </h3>
        <p className={FeatureCardStyles.body}>
          Sed ut perspiciat unde omnis iste natus error sit voluptatem
          accusantium system
        </p>
        {/* TODO: Make a link */}
        Read More
      </div>
    </div>
  );
}

export default FeatureCard;
