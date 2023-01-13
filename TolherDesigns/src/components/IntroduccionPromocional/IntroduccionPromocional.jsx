import React from "react";
import "./IntroduccionPromocional.css";
import LogoWebBlack from "../../assets/images/logoTDNegro.png";
import naturalVector from "../../assets/images/naturalVector.png";
import earthVector from "../../assets/images/earthVector.png";
import velaVector from "../../assets/images/velaVector.png";

const IntroduccionPromocional = () => {
  return (
    <div className="promo">
      <div className="container40">
        <img className="logoPromo" src={LogoWebBlack}></img>
      </div>
      <div className="characteristics">
        <div>
          <img
            className="characteristicsImg"
            src={naturalVector}
            alt="100Eco"
          />
          <h3>100% Natural</h3>
        </div>
        <div>
          <img className="characteristicsImg" src={velaVector} alt="100Eco" />
          <h3>Velas artesanales de soja aromatizadas</h3>
        </div>
        <div>
          <img className="characteristicsImg" src={earthVector} alt="100Eco" />
          <h3>Eco sustentables</h3>
        </div>
      </div>
    </div>
  );
};

export default IntroduccionPromocional;
