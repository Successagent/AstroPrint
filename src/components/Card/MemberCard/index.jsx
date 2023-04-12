import AboutCardLogoOne from "../../../assets/albert.jpg";
import AboutCardLogoTwo from "../../../assets/buchi.jpg";
import AboutCardLogoThree from "../../../assets/solom.jpg";

function MemberCard() {
  return (
    <>
      <section className="member-card">
        <div>
          <img src={AboutCardLogoOne} alt="" />
          <h3 className="h3">Mr Albert Emoefe</h3>
          <p className="h5">Production Manager</p>
        </div>
        <div>
          <img src={AboutCardLogoThree} alt="" />
          <h3 className="h3">Ozeke Komboye </h3>
          <p className="h5">DI Operator</p>
        </div>
        <div>
          <img src={AboutCardLogoTwo} alt="" />
          <h3 className="h3">Santus Egberuo</h3>
          <p className="h5">Machine Operator</p>
        </div>
      </section>
    </>
  );
}

export default MemberCard;
