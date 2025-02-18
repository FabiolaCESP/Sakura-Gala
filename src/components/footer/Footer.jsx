
import React from "react";
import styles from "./Footer.module.css";
import Navbar from "../navbar/Navbar";
import LogoGala from "../../assets/icons/gala-logo.svg";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";


const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const location = useLocation();
  return (
    <footer className={styles.footer}>
      <div className={styles.contentWrapper}>
      {isMobile && location.pathname !== "/" && <Navbar />}
        <div className={styles.logo}>
          <img src={LogoGala} alt="Logo de Gala" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
