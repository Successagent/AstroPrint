import React from 'react'

import ReviewLogoOne from '../../../assets/Images/img_02-2.png'
import ReviewLogoTwo from '../../../assets/Images/img_01-4.png'

const ReviewsCard = () => {
  return (
    <div className="review-card">
      <div>
        <div>
          <p>
            Title Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremqe laudantium totam rem aperiam eaque ipsa quae
            abillo inventore
          </p>
        </div>
        <div>
          <img src={ReviewLogoOne} alt="" />
          <div>
            <h3>Cassey Vegas</h3>
            <p>Web Develop</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p>
            Title Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremqe laudantium totam rem aperiam eaque ipsa quae
            abillo inventore
          </p>
        </div>
        <div>
          <img src={ReviewLogoTwo} alt="" />
          <div>
            <h3>Cassey Vegas</h3>
            <p>Web Develop</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p>
            Title Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremqe laudantium totam rem aperiam eaque ipsa quae
            abillo inventore
          </p>
        </div>
        <div>
          <img src={ReviewLogoOne} alt="" />
          <div>
            <h3>Cassey Vegas</h3>
            <p>Web Develop</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewsCard
