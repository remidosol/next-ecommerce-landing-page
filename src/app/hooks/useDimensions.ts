import { useState, useEffect } from "react";

const useDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  const [screenDimensions, setScreenDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = (_e?: UIEvent) => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      setScreenDimensions({
        width: window.screen.width,
        height: window.screen.height,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { windowDimensions, screenDimensions };
};

export default useDimensions;
