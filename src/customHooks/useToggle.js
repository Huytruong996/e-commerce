import { useState, useCallback } from "react";

const useToggle = (initialValue) => {
  const [isToggle, setToggle] = useState(initialValue);

  const toggle = useCallback(() => {
    setToggle((_toggle) => !_toggle);
  }, []);

  return [isToggle, toggle];
};

export default useToggle;
