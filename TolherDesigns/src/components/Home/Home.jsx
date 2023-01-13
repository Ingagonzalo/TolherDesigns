import React from "react";
import BannerPromocional from "../BannerPromocional/BannerPromocional";
import IntroduccionPromocional from "../IntroduccionPromocional/IntroduccionPromocional";
import ItemListContainer from "../Items/ItemListContainer/ItemListContainer";
import OtherArticlesContainer from "../otherArticles/OtherArticlesContainer/OtherArticlesContainer";
import LogoWebBlack from "../../assets/images/logoTDNegro.png";
import "./home.css";

const Home = () => {
  return (
    <>
      <BannerPromocional />
      <IntroduccionPromocional />
      <div className="textImgCenter">
        <img className="imgBg" src={LogoWebBlack} alt="TolherDesigns" />
        <h2>Nuestras fragancias</h2>
      </div>
      <ItemListContainer />
      <div className="textImgCenter">
        <img className="imgBg" src={LogoWebBlack} alt="TolherDesigns" />
        <h2>Otros Productos</h2>
      </div>
      <OtherArticlesContainer />
    </>
  );
};

export default Home;
