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
        <Svg />


      </Container>
    </>

  )
}

export default SaudiMap