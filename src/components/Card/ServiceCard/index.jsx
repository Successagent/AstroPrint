import React, { useState } from "react";
import ServiceCardStyles from "./ServiceCard.module.css";
import icon1 from "../../../assets/icon_1.png";
function ServiceCard({ bgColor, color, link, title, body }) {
  bgColor = bgColor || "#FEC931";
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={ServiceCardStyles.container}
    >
      <div className={ServiceCardStyles.icon}>
        <img src={icon1} alt="" />
      </div>
      <h3 className={ServiceCardStyles.title}>{title}</h3>
      <p className={ServiceCardStyles.body}>{body}</p>
    </div>
  );
}

export default ServiceCard;
