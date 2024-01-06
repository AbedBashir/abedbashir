import React from 'react'

const GeneralSkills = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Softwares</h3>
        <div className="skills__box">
          {/* Group of skills  */}
            <div className="skills__group">
              {/* Single Skill */}
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills__name">Microsoft</h3>
                    <span className="skills__level">Advanced</span>
                  </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills__name">Google</h3>
                    <span className="skills__level">Advanced</span>
                  </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills__name">Jira</h3>
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
                    <h3 className="skills__name">Slack</h3>
                    <span className="skills__level">Advanced</span>
                  </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills__name">Figma</h3>
                    <span className="skills__level">Advanced</span>
                  </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills__name">VS Code</h3>
                    <span className="skills__level">Advanced</span>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default GeneralSkills