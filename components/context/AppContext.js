import { createContext, useEffect, useState } from "react";

export const AppContext = createContext([]);

export const AppProvider = ({ children }) => {
  //   const [isOpen, setIsOpen] = useState(false);
  //   const [isLoading, setIsLoading] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

//   const handleDrawingClick = () => {
//     setIsOpen((prev) => !prev);
//   };

  // get the scroll position
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        scrollPosition,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
