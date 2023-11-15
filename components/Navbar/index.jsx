import React from 'react';
import { AppBar, Container, Toolbar } from '@mui/material';
import Image from 'next/image';
import imgs from '../../assets/constants/imgs';
import Slider from '../Map/Slider';
import styles from './index.module.scss'
import { useMapContext } from '@/context/MapContext';
import localFont from 'next/font/local'

const Effra = localFont({
  src: [
    {
      path: '../../fonts/Effra_Md.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../fonts/Effra_Heavy.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../fonts/Effra_Rg.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/Effra_cleaBold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})


const Navbar = () => {
  const { search } = imgs;
  const { landElments } = useMapContext();
  return (
    <>
      <AppBar style={{ ...{ background: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(2px)', boxShadow: 'none' }, borderRadius: '0px 0px 24px 24px', ...Effra.style }}>
        <Toolbar>
          <Container>
            <div className={styles.nav_container}>
              <div className={styles.input_container}>
                <input type="text" placeholder='البحث عن..' />
                <div className={styles.icon_container}>
                  <Image src={search} width={20} height={20} />
                </div>
              </div>
              {landElments?.length > 0 && <Slider landElments={landElments} />}


            </div>
          </Container>
        </Toolbar>
      </AppBar>

    </>
  )
}

export default Navbar