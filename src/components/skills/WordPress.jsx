import React from 'react'

const WordPress = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">WordPress</h3>
        <div className="skills__box">
          {/* Group of skills  */}
            <div className="skills__group">
              {/* Single Skill */}
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills__name">REST API</h3>
                    <span className="skills__level">Advanced</span>
                  </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">Custom Blocks</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills__name">Custom Post Types</h3>
                    <span className="skills__level">Advanced</span>
                  </div>
              </div>
            </div>
            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills__name">Custom Fields</h3>
                    <span className="skills__level">Advanced</span>
                  </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills__name">Custom Plugins</h3>
                    <span className="skills__level">Advanced</span>
                  </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills__name">Custom Themes</h3>
                    <span className="skills__level">Advanced</span>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default WordPress