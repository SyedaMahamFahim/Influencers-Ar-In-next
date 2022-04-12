import React from "react";
import styles from "./heroSection.module.css";
import Image from "next/image";
import { HeaderBg, ArabicGamer, VectorBg } from "../../assests/index";

const HeroSection = () => {
  return (
    <>
      <div className={`${styles.heroSection__vector_bg}`}>
        <div className={`${styles.heroSection_svg_bg}`}>
          <div className={`${styles.heroSection_content}`}>
            <h2 className={`${styles.heroSection_content_h2_first}`}>
              Gaming & Esports Talent Agency
            </h2>
            <h2 className={`${styles.heroSection_content_h2_second}`}>
              #Connect Your Brand With Arabic Millennials.
            </h2>
            <div className={`${styles.heroSection_content_icons}`}>
              <div className={`${styles.heroSection_content_iconc_left}`}>
                left
              </div>
              <div className={`${styles.heroSection_content_iconc_right}`}>
                left
              </div>
            </div>
            <div className={`${styles.heroSection_content_brands}`}>
              imgage
            </div>
          </div>
          <div className={`${styles.heroSection_gamers_image}`}></div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
