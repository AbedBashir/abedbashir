import React from 'react';
import "./services.css";
import { useState } from 'react';

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) =>{
      setToggleState(index);
    }
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I Offer</span>

        <div className="services__container container grid">
          {/* Shopify Service */}
          <div className="services__content">
            <div>
              <i class="uil uil-store services__icon"></i>
              <h3 className="services__title">Shopify <br /> Store</h3>
            </div>  

            <span className="services__button" onClick={() => toggleTab(1)}>View More  <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
                <i className="uil uil-times services__modal-close" onClick={() =>  toggleTab(0)}></i>
                <h3 className="services__modal-title">Shopify Online Store</h3>
                <p className="services__modal-description">
                  I build custom Shopify stores, optimizing design and functionality for seamless online experiences. Specializing in theme customization and third-party integrations, I bring brands to life in the digital marketplace.
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Create an Online Store.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Deploy the theme, sections, snippets and assets.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Automate your collections and add products.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Create and finalize pages content.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Finalize Settings and Publish.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>  

          {/* WordPress Service */}
          <div className="services__content">
            <div>
              <i className="uil uil-wordpress-simple services__icon"></i>
              <h3 className="services__title">WordPress <br /> Website</h3>
            </div>  

            <span className="services__button" onClick={() => toggleTab(2)}>View More  <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 2 ? "services__modal active-modal" :  "services__modal"}>
              <div className="services__modal-content">
                <i className="uil uil-times services__modal-close" onClick={() =>  toggleTab(0)}></i>
                <h3 className="services__modal-title">WordPress Website</h3>
                <p className="services__modal-description">
                  I'm a WordPress developer skilled in crafting tailored, responsive websites. With expertise in custom themes, plugins, and SEO optimization, I bring seamless functionality and aesthetic appeal to every project.
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Domain and Hosting.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Select a Theme, or ask for a custom one.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Add Content and Pages.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Install Plugins.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Optimize for SEO and Launch. </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>  

          {/* Mobile Applications Service */}
          <div className="services__content">
            <div>
              <i className="uil uil-mobile-android services__icon"></i>
              <h3 className="services__title">Mobile <br /> Applications</h3>
            </div>  

            <span className="services__button" onClick={() => toggleTab(3)}>View More  <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
                <i className="uil uil-times services__modal-close" onClick={() =>  toggleTab(0)}></i>
                <h3 className="services__modal-title">Mobile Applications</h3>
                <p className="services__modal-description">
                  I develop user-friendly mobile apps for Android and iOS platforms, incorporating innovative features for an engaging experience. Leveraging the latest technologies, I prioritize high performance and tailored solutions to meet clients' unique requirements.                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Define Objectives.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Design and Prototyping.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Development and Coding.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Testing and Quality Assurance.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Deployment and Maintenance.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>  

          {/* Online Private Tutor Service */}
          <div className="services__content">
            <div>
              <i className="uil uil-head-side services__icon"></i>
              <h3 className="services__title">Online Private <br /> Tutor</h3>
            </div>  

            <span className="services__button" onClick={() => toggleTab(4)}>View More  <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 4 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
                <i className="uil uil-times services__modal-close" onClick={() =>  toggleTab(0)}></i>
                <h3 className="services__modal-title">Online Private Tutor</h3>
                <p className="services__modal-description">
                  I'm an online private tutor specializing in personalized and interactive learning experiences. Focused on Web Development, I adapt teaching methods to cater to individual learning styles, fostering comprehensive understanding. My aim is to create a supportive virtual environment for students to achieve academic success and build confidence.                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Needs Assessment.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Customized Lesson Plans.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Interactive Sessions.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Progress Monitoring.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Feedback and Communication.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>  

          {/* Website Consultation Service */}
          <div className="services__content">
            <div>
              <i className="uil uil-question-circle services__icon"></i>
              <h3 className="services__title">Website <br /> Consultation</h3>
            </div>  

            <span className="services__button" onClick={() => toggleTab(5)}>View More  <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 5 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
                <i className="uil uil-times services__modal-close" onClick={() =>  toggleTab(0)}></i>
                <h3 className="services__modal-title">Website Consultation</h3>
                <p className="services__modal-description">
                  I provide web consultation services, offering strategic guidance for optimal online presence. Specializing in UX optimization and technology recommendations, I assist businesses in making informed decisions to enhance their digital success.                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Assessment and Analysis.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Strategic Planning.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Technology Recommendations.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">User Experience Optimization.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Implementation Guidance. </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>  

          {/* Project Management Service */}
          <div className="services__content">
            <div>
              <i className="uil uil-file-graph services__icon"></i>
              <h3 className="services__title">Project <br /> Management</h3>
            </div>  

            <span className="services__button" onClick={() => toggleTab(6)}>View More  <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 6 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
                <i className="uil uil-times services__modal-close" onClick={() =>  toggleTab(0)}></i>
                <h3 className="services__modal-title">Project Management</h3>
                <p className="services__modal-description">
                  I oversee projects, ensuring seamless coordination and efficient delivery. Utilizing effective communication and organization, I navigate through tasks, timelines, and team dynamics to drive successful project outcomes.                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Initiation.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Planning.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Execution.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Monitoring and Controlling.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Closure.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>  
        </div>
    </section>
  )
}

export default Services