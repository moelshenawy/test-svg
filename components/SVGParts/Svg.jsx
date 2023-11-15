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
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <xml version="1.0" encoding="UTF-8" standalone="no" />
      <svg id="svg1" width="858" height="724" fill="none" xmlns="http://www.w3.org/2000/svg" class="saudi-map" viewBox="0 0 858 724">
        <GElements />
      </svg>
    </>
  )
}

export default Svg