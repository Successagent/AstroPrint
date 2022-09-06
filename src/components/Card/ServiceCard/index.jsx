import React, { useState } from "react";
import ServiceCardStyles from "./ServiceCard.module.css";

function ServiceCard() {
  return (
    <div className={ServiceCardStyles.container}>
      <div className={ServiceCardStyles.icon}></div>
      <h3>Digital Printing</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error voluptate</p>
      <a href="">Read More</a>
    </div>
  );
}

export default ServiceCard;
