import React from 'react'

const Technologies = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Technologies</h3>
        <div className="skills__box">
          {/* Group of skills  */}
            <div className="skills__group">
              {/* Single Skill */}
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills__name">NPM</h3>
                    <span className="skills__level">Advanced</span>
                  </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills__name">Git</h3>
                    <span className="skills__level">Advanced</span>
                  </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills__name">GitHub</h3>
                    <span className="skills__level">Advanced</span>
                  </div>
              </div>
            </div>

            {/* Group of skills  */}
            <div className="skills__group">
              {/* Single Skill */}
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills__name">BitBucket</h3>
                    <span className="skills__level">Intermediate</span>
                  </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills__name">DeployHQ</h3>
                    <span className="skills__level">Advanced</span>
                  </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills__name">Postman</h3>
                    <span className="skills__level">Advanced</span>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Technologies