import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import {
  HeaderBg,
  ArabicGamer,
  VectorBg,
  EarthGlobe,
  LogosOne,
  LogosTwo,
  LogosThree,
  LogosFour,
  LogosFive,
  LogosSix,
  UserImg,
} from "../../assests/index";

const HeroSection = () => {
  return (
    <>
    <section className={`${styles.vector_background}`}>

       {/* <div className={`${styles.vector_background_div}`}>
      <img src='../../assests/images/Vector.png' alt="vector-bg" />
      </div>  */}
      <div className={`p-5 md:py-[50px] text-center mx-auto header-bg text-white max-w-full relative lg:max-w-[1100px]`}>
        <Image className="hidden lg:block" src={HeaderBg} alt="header-bg" />
        <div className="lg:absolute top-20 left-1/2 lg:-translate-x-1/2 lg:w-full ">
          <h1
            className={`text-lg font-montserrat font-bold md:font-changa md:text-[30px] lg:text-[44px] leading-relaxed ${styles.header_font_changa}`}
          >
            Gaming &amp; Esports Talent Agency
          </h1>
          <p
            className={`text-base font-montserrat md:text-xl md:font-tajawal ${styles.header_font_poppin}`}
          >
            #Connect your brand with arabic millennials
          </p>
          <div className="flex flex-row justify-center space-x-6 md:space-x-20 py-4 ">
            <div className="flex items-center">
              <Image
                className={`w-5 md:w-7 mr-1 md:mr-3 px-2 ${styles.img_padding} `}
                src={UserImg}
                width={"30px"}
                height={"35px"}
                alt=""
              />
              <p
                className={`${styles.icon_p} text-[22px] md:text-[22px] md:font-poppins font-poppins text-[#ffce51] font-semibold`}
                style={{
                  marginTop: "15px",
                }}
              >
                70+ talents
              </p>
            </div>
            <div className="flex items-center">
              <Image
                className="w-5 md:w-7 mr-1 md:mr-3"
                src={EarthGlobe}
                width={"30px"}
                height={"30px"}
                alt=""
              />
              <p
                className={`${styles.icon_p} text-[15px] md:text-[22px] md:font-poppins font-poppins text-[#ffce51] font-semibold`}
              >
                100M Total Reach
              </p>
            </div>
          </div>
          <div className="grid grid-cols-7 lg:grid-cols-7logos gap-5 max-w-[470px] lg:max-w-[970px] mx-auto">
            <div className="">
              <Image
                src={LogosOne}
                alt=""
                className=""
                width={"100px"}
                height={"70px"}
              />
            </div>
            <div className="">
              <Image
                src={LogosTwo}
                alt=""
                className=""
                width={"100px"}
                height={"70px"}
              />
            </div>
            <div className="">
              <Image
                src={LogosThree}
                alt=""
                className=""
                width={"100px"}
                height={"70px"}
              />
            </div>
            <div className="">
              <Image
                src={LogosFour}
                alt=""
                className=""
                width={"100px"}
                height={"70px"}
              />
            </div>
            <div className="">
              <Image
                src={LogosFour}
                alt=""
                className=""
                width={"100px"}
                height={"70px"}
              />
            </div>
            <div className="">
              <Image
                src={LogosFive}
                alt=""
                className=""
                width={"100px"}
                height={"70px"}
              />
            </div>
            <div className="">
              <Image
                src={LogosSix}
                alt=""
                className=""
                width={"100px"}
                height={"70px"}
              />
            </div>
          </div>
        </div>
        <img
          className="hidden lg:block absolute bottom-[50px] left-[45px] w-[92%]"
          src="/assests/images/arabic-gamers.png"
          alt=""
        />
      </div>
      </section>
    </>
  );
};

export default HeroSection;
