import styles from "@sass/components/Navbar.module.scss";
import { BsArrowRight } from "react-icons/bs";

const { links_left } = styles;
export const NavLeft = () => {
  return (
    <ul className={links_left}>
      <li>
        <a href="/#">
          Home
          <span>
            <BsArrowRight />
          </span>
        </a>
      </li>
      <li>
        <a href="/#">
          About us
          <span>
            <BsArrowRight />
          </span>
        </a>
      </li>
      <li>
        <a href="/#">
          News
          <span>
            <BsArrowRight />
          </span>
        </a>
      </li>
      <li>
        <a href="/#">
          Contact us
          <span>
            <BsArrowRight />
          </span>
        </a>
      </li>
    </ul>
  );
};
