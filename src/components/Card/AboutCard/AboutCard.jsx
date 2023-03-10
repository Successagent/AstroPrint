import AboutCardLogoOne from '../../../assets/Images/img_01-3.jpg'
import AboutCardLogoTwo from '../../../assets/Images/img_02-3.jpg'
import AboutCardLogoThree from '../../../assets/Images/img_03-3.jpg'
import { Button, SmallButton } from '../../Button'
import { FiArrowRight } from 'react-icons/fi'

const AboutCard = () => {
  return (
    <section className="about-card">
      <div>
        <div>
          <img src={AboutCardLogoOne} alt="" />
        </div>
        <div className="about-card-items">
          <SmallButton>
            <FiArrowRight />
          </SmallButton>
          <h3 className="h3">Company History</h3>
          <p className="h5">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam
          </p>
        </div>
      </div>
      <div>
        <div>
          <img src={AboutCardLogoTwo} alt="" />
        </div>
        <div className="about-card-items">
          <SmallButton><FiArrowRight/></SmallButton>
          <h3 className="h3">Exclusive Members</h3>
          <p className="h5">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam
          </p>
        </div>
      </div>
      <div>
        <div>
          <img src={AboutCardLogoThree} alt="" />
        </div>
        <div className="about-card-items">
          <SmallButton>
            <FiArrowRight></FiArrowRight>
          </SmallButton>
          <h3 className="h3">Working Progress</h3>
          <p className="h5">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutCard
