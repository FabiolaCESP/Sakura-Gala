import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import BookIcon from "../../assets/icons/book-open-icon.svg";
import ReadingCardIcon from "../../assets/icons/card-icon-reading.svg";
import ArchiveIcon from "../../assets/icons/archive-icon.svg";
import React from "react";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/instructions"
        className={({ isActive }) =>
          isActive ? styles.active : styles.navItem
        }
      >
        <img src={BookIcon} alt="Instrucciones" />
        <span>Instrucciones</span>
      </NavLink>
      <NavLink
        to="/reading"
        className={({ isActive }) =>
          isActive ? styles.active : styles.navItem
        }
      >
        <img src={ReadingCardIcon} alt="Lectura" />
        <span>Lectura</span>
      </NavLink>
      <NavLink
        to="/favorites"
        className={({ isActive }) =>
          isActive ? styles.active : styles.navItem
        }
      >
        <img src={ArchiveIcon} alt="Favoritos" />
        <span>Favoritos</span>
      </NavLink>
    </nav>
  );
};

export default Navbar;
