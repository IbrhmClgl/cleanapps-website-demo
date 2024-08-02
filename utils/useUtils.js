import { useState } from "react";

const useUtils = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (event) => {
    // store scrollY in state
    setScrollTop(window.scrollY);
  };

  return { handleScroll, scrollTop };
};

export default useUtils;
