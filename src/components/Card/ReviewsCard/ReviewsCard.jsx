import React from "react";

import ReviewLogoOne from "../../../assets/Images/img_02-2.png";
import ReviewLogoTwo from "../../../assets/Images/img_01-4.png";

const ReviewsCard = () => {
  return (
    <div className="review-card">
      <div>
        <div className="reviewcard-caption">
          <p className="h5">
            I recently used AstroPrints for my business cards, and I couldn't be
            happier with the results. The quality of the printing was excellent,
            with vibrant colors and crisp details. The staff at Ebiye Printing
            were professional and accommodating, ensuring that my design was
            accurately reproduced. The turnaround time was also impressive,
            delivering my order ahead of schedule. I highly recommend
            AstroPrints for all your printing needs.
          </p>
        </div>
        <div className="reviewcard-item-two">
          <img src={ReviewLogoOne} alt="" />
          <div>
            <h3>Mary</h3>
            <p className="h5">Modal</p>
          </div>
        </div>
      </div>
      <div>
        <div className="reviewcard-caption">
          <p className="h5">
            AstroPrints has become my go-to printing company for all my
            marketing materials. From brochures to flyers, they consistently
            deliver top-notch quality. The attention to detail is remarkable,
            and they have a wide range of paper options to choose from. I've
            also been impressed with their customer service; they are always
            friendly, responsive, and willing to go the extra mile. If you're
            looking for reliable and high-quality printing, AstroPrints is the
            way to go.
          </p>
        </div>
        <div className="reviewcard-item-two">
          <img src={ReviewLogoTwo} alt="" />
          <div>
            <h3>Business Man</h3>
            <p className="h5">Web Develop</p>
          </div>
        </div>
      </div>
      <div>
        <div className="reviewcard-caption">
          <p className="h5">
            Astroprints is a gem of a company! I recently had them print custom
            invitations for my event, and they turned out beautifully. The
            colors were vibrant, the paper was sturdy, and the print quality was
            impeccable. The team at Astroprints was incredibly helpful
            throughout the process, offering guidance on design choices and
            providing prompt updates on the progress of my order. I was
            thoroughly impressed with their professionalism and attention to
            detail. Astroprints has earned my trust, and I'll be using their
            services for all my future printing needs.
          </p>
        </div>
        <div className="reviewcard-item-two">
          <img src={ReviewLogoOne} alt="" />
          <div>
            <h3>Mellisa</h3>
            <p className="h5">Degital Marketer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
