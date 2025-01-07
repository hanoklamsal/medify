import React from 'react'
import hero_image from './../assets/images/hero_image.png'
import styles from './Hero.module.css';
import { Box, Button, Typography } from '@mui/material';

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
        <Box className={styles.heroContainerBox}>
            <Typography
            letterSpacing={1.5}
            fontWeight={500}
            >
                Skip the travel! Find online
            </Typography>
            <Typography
            fontSize={'2rem'}
            fontWeight={600}>
                Medical <span style={{ color: '#2AA7FF'}}>Centers</span>
            </Typography>
            <Typography>
            Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
            </Typography>
            <Button sx={{textTransform:'none', backgroundColor:'var(--primary-color)', mt: 2,}} variant='contained'>
                Find Centers
            </Button>
        </Box>
        <img height={400} width={300} className={styles.heroImg} src={hero_image}/>
    </div>
  )
}

export default Hero