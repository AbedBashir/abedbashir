import React from 'react'
import './work.css'
import Works from './Works'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

const Work = () => {
  return (
    <section className="work section" id='portfolio'>
      <h2 className="section__title">My Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>
        <Works />
    </section>
  )
}

export default Work