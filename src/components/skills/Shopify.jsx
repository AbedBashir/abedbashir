import React from 'react'

const Shopify = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Shopify</h3>
        <div className="skills__box">
          {/* Group of skills  */}
            <div className="skills__group">
              {/* Single Skill */}
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills__name">Liquid</h3>
                    <span className="skills__level">Advanced</span>
                  </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                  <div>  
                    <h3 className="skills__name">Theme Customizations</h3>
                    <span className="skills__level">Advanced</span>
                  </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills__name">Shopify CLI</h3>
                    <span className="skills__level">Advanced</span>
                  </div>
              </div>
            </div>
            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills__name">ThemeKit</h3>
                    <span className="skills__level">Advanced</span>
                  </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills__name">JSON Templates</h3>
                    <span className="skills__level">Advanced</span>
                  </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills__name">Schemas</h3>
                    <span className="skills__level">Advanced</span>
                  </div>
              </div>

            </div>
        </div>
    </div>
  )
}

export default Shopify