import AboutCardLogoOne from "../../../assets/sublime.webp";
import AboutCardLogoTwo from "../../../assets/monogramming.jpg";
import AboutCardLogoThree from "../../../assets/Dtf.jpg";
import largeFormat from "../../../assets/large_format.jpg";
import photoPrinter from "../../../assets/photo_printer.webp";
import weaving from "../../../assets/Weaving.jpg";

const AboutCard = () => {
  return (
    <section className="about-card">
      <div>
        <div>
          <img src={AboutCardLogoTwo} alt="" />
        </div>
        <div className="about-card-items">
          <h3 className="h3">Monogramming Machine</h3>
          <p className="h5">
            AstroPrints uses their monogramming machine to add personalized
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
            AstroPrints uses their DTF (Direct-to-Film) machine to produce
            high-quality transfers for a variety of products, including
            t-shirts, hats, bags, and more. The DTF machine uses a combination
            of inkjet printing and heat transfer technology to create vibrant
            and durable designs.
          </p>
        </div>
      </div>
      <div>
        <div>
          <img src={largeFormat} alt="" />
        </div>
        <div className="about-card-items">
          <h3 className="h3">Large Format</h3>
          <p className="h5">
            Our Large format printing machines are designed to produce
            high-quality prints on a larger scale, typically used for printing
            banners, posters, signs, vehicle wraps, and other large-format
            graphics. These machines employ advanced printing technologies and
            processes to create vibrant and detailed prints
          </p>
        </div>
      </div>
      <div>
        <div>
          <img src={photoPrinter} alt="" />
        </div>
        <div className="about-card-items">
          <h3 className="h3">Photo Printer</h3>
          <p className="h5">
            Our Photo printing machines combine advanced technology, precise
            color management, and attention to detail to transform digital
            images into tangible works of art. They provide individuals with the
            ability to preserve and relive their cherished memories in a
            tangible form.
          </p>
        </div>
      </div>
      <div>
        <div>
          <img src={weaving} alt="" />
        </div>
        <div className="about-card-items">
          <h3 className="h3">Weaving Machine</h3>
          <p className="h5">
            Our Weaving machines combine intricate mechanisms, precise control
            systems, and skilled craftsmanship to create a wide range of woven
            fabrics, including textiles for clothing, upholstery, carpets, and
            industrial applications. They continue to play a vital role in the
            textile industry, bridging the gap between creativity and
            functionality.
          </p>
        </div>
      </div>
      <div>
        <div>
          <img src={AboutCardLogoOne} alt="" />
        </div>
        <div className="about-card-items">
          <h3 className="h3">Sublimation Machine</h3>
          <p className="h5">
            AstroPrints uses their sublimation machine to create high-quality
            and durable printed products. The process involves transferring
            designs or images onto various materials using heat and pressure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
