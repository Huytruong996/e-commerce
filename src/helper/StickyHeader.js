import React, { useRef, useState, useEffect, useCallback } from "react";

const StickyHeader = (defaultSticky = false) => {
  const [isSticky, setSticky] = useState(defaultSticky);
  const headerRef = useRef();

  const toggleSticky = useCallback(
    ({ top, bottom }) => {
      if (top <= -200) {
        !isSticky && setSticky(true);
      } else {
        isSticky && setSticky(false);
      }
    },
    [isSticky]
  );

  useEffect(() => {
    const handleScroll = () => {
      headerRef.current &&
        toggleSticky(headerRef.current.getBoundingClientRect());
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [toggleSticky]);
  return { headerRef, isSticky };
};

export default StickyHeader;
