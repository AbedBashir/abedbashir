import React from 'react'

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend</h3>
        <div className="skills__box">
          {/* Group of skills  */}
            <div className="skills__group">
              {/* Single Skill */}
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">PHP</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills__name">SQL</h3>
                    <span className="skills__level">Intermediate</span>
                  </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills__name">NodeJS</h3>
                    <span className="skills__level">Beginner</span>
                  </div>
              </div>
            </div>

            {/* Group of skills  */}
            <div className="skills__group">
              {/* Single Skill */}
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills__name">Swift</h3>
                    <span className="skills__level">Beginner</span>
                  </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills__name">Kotlin</h3>
                    <span className="skills__level">Beginner</span>
                  </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills__name">Python</h3>
                    <span className="skills__level">Beginner</span>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Backend