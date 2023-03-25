/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Head from "next/head";
import LightTheme from "../../layouts/Light";
import Intro5 from "../../components/Intro5/intro5";
import NavbarArch from "../../components/Navbar-arch/navbar-arch";
import FooterArch from "../../components/Footer-arch/footer-arch.jsx";
import ContactArch from "../../components/Contact-arch/contact-arch";
import AboutUs3 from "../../components/About-us3/about-us3";
import Works3 from "../../components/Works3/works3";

const Homepage = () => {
  const navbarRef = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <>
      <Head>
        <link rel="stylesheet" defer href="/css/arch-skin-light.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Khand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <LightTheme>
        <NavbarArch navbarRef={navbarRef} theme="themeL" />
        <Intro5 />
        <AboutUs3 />
        <Works3 />
        <ContactArch />
        <FooterArch />
      </LightTheme>
    </>
  );
};

export default Homepage;
