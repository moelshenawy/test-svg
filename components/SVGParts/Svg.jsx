import React, { use, useEffect, useState } from 'react'
import Defs from './Defs';
import GElements from './GElements';


const Svg = () => {
  const [viewBox, setViewBox] = useState()
  const [smallScreen, setSmallScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      if (viewportWidth >= 450) {
        setSmallScreen(true)
      } else {
        setSmallScreen(false)

      }

      if (viewportWidth <= 600) {
        setViewBox("90 70 758 624");
      } else if (viewportWidth <= 1200) {
        setViewBox("0 0 858 724");
      } else {
        setViewBox("0 0 858 724");
      }
    };

    // Initial call
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <svg
        width="393"
        height="482"
        viewBox="0 0 393 482"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <GElements />

      </svg>




    </>
  )
}

export default Svg