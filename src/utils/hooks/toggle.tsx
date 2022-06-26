import { useState } from "react";

const useToggle = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = (bool: boolean | undefined = undefined) => {
    if (bool === undefined) {
      setToggle((prev) => !prev);
    } else {
      setToggle(bool);
    }
  };

  return { toggle, handleToggle };
};

export default useToggle;
