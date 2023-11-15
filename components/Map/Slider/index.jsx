import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Typography } from '@mui/material';
import { useMapContext } from '@/context/MapContext';
import styles from './index.module.scss'
const Slider = ({ landElments }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5.5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7.5
    },
    smallScreens: {
      breakpoint: { max: 1260, min: 1024 },
      items: 3.5

    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 360 },
      items: 4
    },
    smallMobile: {
      breakpoint: { max: 360, min: 250 },
      items: 4
    },
    smallMobile2: {
      breakpoint: { max: 250, min: 0 },
      items: 4,
    }
  };

  const { contextValue,
    setLandElemnts,
    activeIndex,
    setActiveIndex,
    activeLand,
    setActiveLand,
    resetTransform,
    isPointsActive,
    seIsPointsActive,
    cityNames,
    setCityNames,
    handleZoomToLand, } = useMapContext();

  return (
    <>
      <div className={styles.slider_container}>
        <Carousel
          rtl={true}
          responsive={responsive}
          minimumTouchDrag={10}
          arrows={false}
          ssr={false}

          draggable
          additionalTransfrom={0}
          centerMode={false}
          focusOnSelect={false}
          keyBoardControl
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
        >
          <div className={`${styles.slider} ${activeIndex === null ? styles.active : ''}`} onClick={() => {
            resetTransform();
            setActiveIndex(null);
            setActiveLand(null);
            seIsPointsActive(false);

            landElments.forEach((element) => {
              element.classList.remove('activeLand', 'hiddenPoints');
            });
          }} >

            <div className={styles.name}>
              <Typography>المملكة</Typography>
            </div>
          </div>
          {Array.from({ length: landElments.length }).map((_, index) => (

            <>
              {console.log(landElments, "landElments")
              }
              <div className={`${styles.slider} ${index === activeIndex ? styles.active : ''}`} key={index} onClick={() => handleZoomToLand(index)}>
                <div className={styles.name}>
                  <Typography>الرياض </Typography>
                </div>
              </div>

            </>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
