import React from "react";
import styles from "@sass/components/Navbar.module.scss";

interface BtnProps {
  handleToggle: () => void;
  toggle: boolean;
}

const { burger, burgerBtn, active } = styles;

export const BurgerButton: React.FC<BtnProps> = ({ handleToggle, toggle }) => {
  return (
    <button 
    onClick={handleToggle}
    className={toggle ? burgerBtn + " " + active : burgerBtn} 
    aria-expanded="false">
      <i className={burger} />
    </button>
  );
};
