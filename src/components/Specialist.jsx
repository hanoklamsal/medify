import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import heenaSachdevaImage from './../assets/images/dr-heena-sachdeva.png';
import aknurSharmaImage from './../assets/images/dr-ankur-sharma.png';
import ahmadStevensImage from './../assets/images/dr-ahmad-stevens.png';
import lesleyHullImage from './../assets/images/dr-lesley-hull.png';
import ahmadKhanImage from './../assets/images/dr-ahmad-khan.png';
import SpecialistCard from './SpecialistCard';
import  styles  from './Specialist.module.css';

const doctors = [
  { name: 'Dr. Aknur Sharma', specialization: 'Medicine', img: aknurSharmaImage },
  { name: 'Dr. Ahmad Stevens', specialization: 'Neurologist', img: ahmadStevensImage },
  { name: 'Dr. Lesley Hull', specialization: 'Medicine', img: lesleyHullImage },
  { name: 'Dr. Ahmad Stevens', specialization: 'Neurologist', img: ahmadStevensImage },
  { name: 'Dr. Heena Sachdeva', specialization: 'Orthopedics', img: heenaSachdevaImage },
  { name: 'Dr. Aknur Sharma', specialization: 'Medicine', img: aknurSharmaImage },
  { name: 'Dr. Ahmad Stevens', specialization: 'Neurologist', img: ahmadStevensImage },
  { name: 'Dr. Ahmad Khan', specialization: 'Medicine', img: ahmadKhanImage },
  { name: 'Dr. Heena Sachdeva', specialization: 'Orthopedics', img: heenaSachdevaImage },
];

const Specialist = () => {
  return (
    <div className={styles.specialistContainer}>
      <h2 style={{ fontWeight: 600, fontSize: '28px', marginBottom: '20px', textAlign: 'center' }}>
        Meet Our Specialists
      </h2>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className={`mySwiper ${styles.specialistSwiper}`}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {doctors.map((doctor, index) => (
          <SwiperSlide key={index}>
            <SpecialistCard
              img={doctor.img}
              name={doctor.name}
              specialization={doctor.specialization}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Specialist;
