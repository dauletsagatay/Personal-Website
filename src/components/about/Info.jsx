import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bx-award about__icon'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">7+ Years Working</span>
        </div>

        <div className="about__box">
            <i class='bx bxs-briefcase-alt about__icon' ></i>
            <h3 className="about__title">Executed</h3>
            <span className="about__subtitle">Four $1M+ projects</span>
        </div>

        <div className="about__box">
            <i class='bx bx-support about__icon' ></i>
            <h3 className="about__title">Explored</h3>
            <span className="about__subtitle">3 career paths</span>
        </div>
    </div>
  )
}

export default Info