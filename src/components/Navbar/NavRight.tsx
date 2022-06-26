import { useToggle } from "@/utils/hooks";
import styles from "@sass/components/Navbar.module.scss";
import { BsChevronDown } from "react-icons/bs";

const { links_right, btn, dropMenu, lang } = styles;

export const NavRight = () => {

  const {toggle, handleToggle} = useToggle();
  
  return (
    <div className={links_right}>
      <div>
        <a href="/#">Login</a>
      </div>

      <div>
        <a href="/#" className={btn}>
          Sign up
        </a>
      </div>

      <div className={lang}>
        <button onClick={() => handleToggle()}>
          EN{" "}
          <span style={{ display: "flex", alignItems: "center" }}>
            <BsChevronDown />
          </span>
        </button>

        {toggle && <div className={dropMenu}>
          <ul>
            <li>
              <a href="/#">EN</a>
            </li>
            <li>
              <a href="/#">AR</a>
            </li>
          </ul>
        </div>}
      </div>
    </div>
  );
};
