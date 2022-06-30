import styles from "@sass/components/Navbar.module.scss";
import { useToggle } from "@/utils/hooks";
import { NavLeft } from "./NavLeft";
import { NavRight } from "./NavRight";
import { Logo } from "../Logo";
import { BurgerButton } from "./BurgerButton";
import { useEffect } from "react";

const { wrapper, links } = styles;

export const Navbar = () => {
  const { toggle, handleToggle } = useToggle();

  useEffect(() => {
    let screenWidth = window.innerWidth;

    if (screenWidth > 899) {
      handleToggle(true);
    }

    const handleResize = () => {
      screenWidth = window.innerWidth;
      if (screenWidth > 899) {
        handleToggle(true);
      } else {
        handleToggle(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleToggle]);

  return (
    <nav>
      <div className="container">
        <div className={wrapper}>
          <Logo />

          <BurgerButton toggle={toggle} handleToggle={() => handleToggle()} />

          {toggle && (
            <div className={links}>
              <NavRight />
              <NavLeft />
            </div>
          )}
          {/* space */}
        </div>
      </div>
    </nav>
  );
};
