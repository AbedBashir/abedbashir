import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer__container container">
      <h1 className="footer__title">Abdel Rahman Bashir</h1>

      <ul className="footer__list">
        <li>
          <a href="#about" className="footer__link">About</a>
        </li>
        <li>
          <a href="#portfolio" className="footer__link">Projects</a>
        </li>
        <li>
          <a href="#qualifications" className="footer__link">Qualifications</a>
        </li>
        <li>
          <a href="#testimonials" className="footer__link">Testimonials</a>
        </li>
      </ul>

      <div className="footer__social">
        <a href="https://www.instagram.com/abedbashir/" className="footer__social-link" target='_blank'>
          <i className="bx bxl-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/abdel-rahman-bashir-952732208/" className="footer__social-link" target='_blank'>
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="https://github.com/AbedBashir" className="footer__social-link" target='_blank'>
          <i className="bx bxl-github"></i>
        </a>
      </div>

      <span className="footer__copy">&#169; Abdel Rahman Bashir - All rights reserved.</span>
    </div>
  </footer>
  )
}

export default Footer