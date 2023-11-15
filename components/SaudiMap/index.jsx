import React from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import imgs from '../../assets/constants/imgs';
import Svg from '../SVGParts/Svg';
import { useRouter } from 'next/router';
import "react-multi-carousel/lib/styles.css";
import { useMapContext } from '@/context/MapContext';
import styles from './index.module.scss'
import { Container } from '@mui/material';
const SaudiMap = ({ }) => {
  const { landElments,
    setActiveIndex,
    setActiveLand,
    transformComponentRef,
    seIsPointsActive,
  } = useMapContext();


  return (
    <>
      <Container>
        <TransformWrapper
          ref={transformComponentRef}
          wheel={{ wheelDisabled: true }}
          pan={{ disabled: false }}
          zoomIn={{ step: 100 }}
          zoomOut={{ step: 100 }}

          minScale={0.5}
          maxScale={2}
          initialScale={1}

          doubleClick={{ disabled: false, mode: "reset" }}

        >


          {({ zoomIn, zoomOut, resetTransform }) => (

            <>
              <div className={"tools"}>
                <button onClick={() => zoomIn()}>+</button>
                <button onClick={() => zoomOut()}>-</button>
                <button onClick={() => {
                  resetTransform();
                  setActiveIndex(null);
                  setActiveLand(null);
                  seIsPointsActive(false);

                  landElments.forEach((element) => {
                    element.classList.remove('activeLand', 'hiddenPoints');
                  });

                }}>Reset</button>
              </div>

              <TransformComponent>
                <Svg />
              </TransformComponent>
            </>
          )
          }
        </TransformWrapper >
        <Svg />
      </Container>
    </>

  )
}

export default SaudiMap