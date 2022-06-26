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
    const triggerDisplay = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 899) {
        handleToggle(true);
      }
    };

    window.addEventListener("resize", triggerDisplay);
    triggerDisplay()
    return () => {
      window.removeEventListener("resize", triggerDisplay)
    }
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
