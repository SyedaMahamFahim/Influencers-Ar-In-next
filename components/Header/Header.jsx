import React, { useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import { Logo } from "../../assests/index";
import Link from "next/link";
import { NavLinks } from "../../StaticData/index";
import { useRouter } from "next/router";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
const NavLinksComponent = ({ pageTitle, url, isPadding }) => {
  const router = useRouter();

  return (
    <>
      <Link href={url}>
        <a
          className={`mr-5 hover:text-orange cursor-pointer 
          ${isPadding ? "py-3" : ""}
          
          ${styles.nav_links} ${
            router.pathname === url
              ? `${styles.active_link_color}`
              : `${styles.none_active_link_color}`
          }`}
        >
          {" "}
          {pageTitle}
        </a>
      </Link>
    </>
  );
};

const MobileHeader = () => {
  return (
    <>
      <div className={`${styles.mobile_header_container}`}>
        <div className={`${styles.mobile_header_box}`}>
          <div className={`${styles.mobile_header__top}`}>
            <ImCross />
          </div>
          <div className={`${styles.mobile_header__top}`}>
            <nav className="font-poppins hidden lg:block font-poppins text-[20px] font-medium md:ml-auto md:mr-auto flex items-center justify-center">
              {NavLinks.map((val) => (
                <NavLinksComponent
                  pageTitle={val.pageName}
                  key={val.id}
                  url={val.url}
                />
              ))}
              <a
                href=""
                className={`mr-8 hover:text-orange cursor-pointer ${styles.nav_links}`}
              >
                中文 (中国)
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <div
        className={`p-6 h-[89px] md:h-[165px] mx-auto md:none ${styles.desk_header}`}
      >
        <div className=" flex flex-row justify-between items-center align-center mx-auto">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src={Logo} alt="Logo" width={"130px"} height={"160px"} />
          </a>
          <nav className="font-poppins hidden lg:block font-poppins text-[20px] font-medium md:ml-auto md:mr-auto flex items-center justify-center">
            {NavLinks.map((val) => (
              <NavLinksComponent
                pageTitle={val.pageName}
                key={val.id}
                url={val.url}
                isPadding={false}
              />
            ))}
            <a
              href=""
              className={`mr-8 hover:text-orange cursor-pointer ${styles.nav_links}`}
            >
              中文 (中国)
            </a>
          </nav>

          <div className="flex flex-row space-x-4">
            <div className={`${styles.ct_div_block} ${styles.border_effect}`}>
              <Link href={"/"}>
                <a className={`cursor-pointer ${styles.border_effect_a}`}>
                  {" "}
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`px-8 flex flex-row justify-between items-center align-center ${styles.mobile_header}`}
      >
        <div className={`${styles.mobile_logo_div}`}>
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src={Logo} alt="Logo" width={"100px"} height={"130px"} />
          </a>
        </div>
        <div
          className={`${styles.mobile_menu_div}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <GiHamburgerMenu />
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={`${styles.mobile_header_container}`}>
          <div className={`${styles.mobile_header_box}`}>
            <div
              className={`${styles.mobile_header__top}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <ImCross /> close
            </div>
            <div className={`${styles.mobile_header__top}`}>
              <nav
                className={`text-[20px] font-medium md:ml-auto flex flex-cloumn items-center justify-center ${styles.mobile_header_navbar}`}
              >
                {NavLinks.map((val) => (
                  <NavLinksComponent
                    pageTitle={val.pageName}
                    key={val.id}
                    url={val.url}
                    isPadding={true}
                  />
                ))}
                <a
                  href=""
                  className={`mr-8 hover:text-orange cursor-pointer ${styles.nav_links}`}
                >
                  中文 (中国)
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
