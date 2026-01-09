"use client";

import { createContext, useState, useEffect } from "react";

// Create the context
export const DeviceContext = createContext();

export const DeviceProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  const [isSafari, setIsSafari] = useState(false);
  const [isTouch, setIsTouch] = useState(null); // ← NEW

  // Detect if the screen is mobile size
  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 769; // Calculate the new value
      setIsMobile(newIsMobile); // Update the state
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const hasTouch =
      navigator.maxTouchPoints > 0 || window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;

    setIsTouch(hasTouch);
  }, []);

  useEffect(() => {
    const safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    setIsSafari(safari);
  }, []);

  return <DeviceContext.Provider value={{ isMobile, isSafari, isTouch }}>{children}</DeviceContext.Provider>;
};
