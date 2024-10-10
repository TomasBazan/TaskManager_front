import React, { useState, useEffect, useContext, ReactNode } from "react";
import { ScreenSizeContext } from "./ScreenSizeContext";

type props = {
  children: JSX.Element | JSX.Element[];
};
export const ScreenSizeProvider = ({ children }: props) => {
  const MOBILE_WIDTH = 480;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_WIDTH);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_WIDTH);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ScreenSizeContext.Provider value={{ isMobile }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export const useScreenSize = () => {
  return useContext(ScreenSizeContext);
};
