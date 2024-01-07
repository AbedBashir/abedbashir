import React from 'react';
import "./qualification.css";
import { useState } from 'react';


const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) =>{
    setToggleState(index);
  };
  return (
    <section className="qualification container section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>
        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
              <i className="uil uil-briefcase-alt qualification__icon"></i>
                Experience
            </div>
            <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
              <i className="uil uil-graduation-cap qualification__icon"></i>
                Education
            </div>
          </div>

          <div className="qualification__sections">
            <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
              {/* Work 1 */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Technical Lead</h3>
                  <span className="qualification__subtitle">Growth Hacker - Montreal, Quebec</span>
                    <div className="qualification__calender">
                      <i className="uil uil-calendar-alt">
                          04/2023 - Present
                      </i>
                    </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Senior Web Developer</h3>
                  <span className="qualification__subtitle">Growth Hacker - Montreal, Quebec</span>
                    <div className="qualification__calender">
                      <i className="uil uil-calendar-alt">
                          10/2022 - 04/2023
                      </i>
                    </div>
                </div>
              </div>
              {/* Work 2 */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Senior Shopify Developer</h3>
                  <span className="qualification__subtitle">Parallel Beauty LTD - Lebanon, Beirut</span>
                    <div className="qualification__calender">
                      <i className="uil uil-calendar-alt">
                          01/2022 - 10/2022
                      </i>
                    </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              {/* Work 3 */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">WordPress Developer</h3>
                  <span className="qualification__subtitle">Webtags - Lebanon, Beirut</span>
                    <div className="qualification__calender">
                      <i className="uil uil-calendar-alt">
                          10/2021 - 04/2023
                      </i>
                    </div>
                </div>
              </div>
              {/* Work 4 */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">WordPress Developer</h3>
                  <span className="qualification__subtitle">Securealm - Lebanon, Beirut</span>
                    <div className="qualification__calender">
                      <i className="uil uil-calendar-alt">
                          07/2021 - 10/2023
                      </i>
                    </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              {/* Work 5 */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Junior Frontend Developer</h3>
                  <span className="qualification__subtitle">Productra - Lebanon, Beirut</span>
                    <div className="qualification__calender">
                      <i className="uil uil-calendar-alt">
                          05/2021 - 07/2023
                      </i>
                    </div>
                </div>
              </div>

            </div>

            <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
              {/* Study 1 */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Bachelor of Computer Science</h3>
                  <span className="qualification__subtitle">Beirut Arab University</span>
                    <div className="qualification__calender">
                      <i className="uil uil-calendar-alt">
                          2016 - 2021
                      </i>
                    </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              {/* Study 2 */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Computer Engineering</h3>
                  <span className="qualification__subtitle">Beirut Arab University</span>
                    <div className="qualification__calender">
                      <i className="uil uil-calendar-alt">
                          2016 - 2018
                      </i>
                    </div>
                </div>
              </div>
              {/* Study 3 */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Economics & Sociology</h3>
                  <span className="qualification__subtitle">College Khadija El-Kobra - Makassed</span>
                    <div className="qualification__calender">
                      <i className="uil uil-calendar-alt">
                          2009 - 2016
                      </i>
                    </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              {/* Study 4 */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Student</h3>
                  <span className="qualification__subtitle">Ecole des filles de la charite</span>
                    <div className="qualification__calender">
                      <i className="uil uil-calendar-alt">
                          2000 - 2009
                      </i>
                    </div>
                </div>
              </div>
              

            </div>
          </div>
        </div>
    </section>
  )
}

export default Qualification