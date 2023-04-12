import AboutCardLogoOne from "../../../assets/sublime.webp";
import AboutCardLogoTwo from "../../../assets/monogramming.jpg";
import AboutCardLogoThree from "../../../assets/Dtf.jpg";
import { Button, SmallButton } from "../../Button";
import { FiArrowRight } from "react-icons/fi";

const AboutCard = () => {
  return (
    <section className="about-card">
      <div>
        <div>
          <img src={AboutCardLogoOne} alt="" />
        </div>
        <div className="about-card-items">
          <h3 className="h3">Sublimation Machine</h3>
          <p className="h5">
            AstroPrint uses their sublimation machine to create high-quality and
            durable printed products. The process involves transferring designs
            or images onto various materials using heat and pressure.
          </p>
        </div>
      </div>
      <div>
        <div>
          <img src={AboutCardLogoTwo} alt="" />
        </div>
        <div className="about-card-items">
          <h3 className="h3">Monogramming Machine</h3>
          <p className="h5">
            AstroPrint uses their monogramming machine to add personalized
            designs to a variety of products. The machine uses
            computer-controlled embroidery to stitch custom designs onto items
            such as shirts, hats, bags, and more.
          </p>
        </div>
      </div>
      <div>
        <div>
          <img src={AboutCardLogoThree} alt="" />
        </div>
        <div className="about-card-items">
          <h3 className="h3">DTF Machine</h3>
          <p className="h5">
            AstroPrint uses their DTF (Direct-to-Film) machine to produce
            high-quality transfers for a variety of products, including
            t-shirts, hats, bags, and more. The DTF machine uses a combination
            of inkjet printing and heat transfer technology to create vibrant
            and durable designs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
