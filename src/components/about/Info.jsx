import React from 'react'

const info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">4+ Years</span>
      </div>
      <div className="about__box">
        <i class='bx bx-check about__icon'></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">50+ Projects</span>
      </div>
      <div className="about__box">
        <i class='bx bx-cog about__icon'></i>
        <h3 className="about__title">Maintained</h3>
        <span className="about__subtitle">30+ Websites</span>
      </div>
    </div>
  )
}

export default info