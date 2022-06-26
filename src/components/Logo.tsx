import styles from "@sass/components/Navbar.module.scss";
import logoImg from "@assets/logo.png";

const { logo } = styles;
export const Logo = () => {
  return (
    <div className={logo}>
      <img src={logoImg} alt="logo" />
    </div>
  );
};
