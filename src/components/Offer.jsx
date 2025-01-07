import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

import offer1_img from './../assets/images/offer1.jpg';
import offer2_img from './../assets/images/offer2.jpg';
import offer3_img from './../assets/images/offer3.jpg';

import styles from './Offer.module.css'

const Offer = () => {
  return (
    <div className={styles.offerContainer}>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={20}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        initialSlide={1}  // Set the second slide (index 1) as the default
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{ borderRadius: '22px', overflow: 'hidden' }}>
          <img src={offer1_img} alt="Offer 1" style={{ width: '100%', height: 'auto' }} />
        </SwiperSlide>
        <SwiperSlide style={{ borderRadius: '22px', overflow: 'hidden' }}>
          <img src={offer2_img} alt="Offer 2" style={{ width: '100%', height: 'auto' }} />
        </SwiperSlide>
        <SwiperSlide style={{ borderRadius: '22px', overflow: 'hidden' }}>
          <img src={offer3_img} alt="Offer 3" style={{ width: '100%', height: 'auto' }} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Offer;
