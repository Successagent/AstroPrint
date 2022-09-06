import React, { useState } from 'react'
import AboutCardLogoOne from '../../../assets/Images/img_01-3.jpg'
import AboutCardLogoTwo from '../../../assets/Images/img_02-3.jpg'
import AboutCardLogoThree from '../../../assets/Images/img_03-3.jpg'

function MemberCard() {
  return (
    <>
      <section className="member-card">
        <div>
          <img src={AboutCardLogoOne} alt="" />
          <h3>Company History</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam
          </p>
          <div>
            <div>
              <i class="bdevs-btn-icon fab fa-facebook-f"></i>
            </div>
            <div>
              <i class="bdevs-btn-icon fab fa-facebook-f"></i>
            </div>
            <div>
              <i class="bdevs-btn-icon fab fa-facebook-f"></i>
            </div>
            <div>
              <i class="bdevs-btn-icon fab fa-facebook-f"></i>
            </div>
          </div>
        </div>
        <div>
          <img src={AboutCardLogoTwo} alt="" />
          <h3>Company History</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam
          </p>
        </div>
        <div>
          <img src={AboutCardLogoThree} alt="" />
          <h3>Company History</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam
          </p>
        </div>
        <div>
          <img src={AboutCardLogoOne} alt="" />
          <h3>Company History</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam
          </p>
        </div>
      </section>
    </>
  )
}

export default MemberCard
