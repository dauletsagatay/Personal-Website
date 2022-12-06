import React from 'react'
import './skills.css';

const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Competitive programming</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name">C++</h3>
                        <span className="skills__level">Proficient</span>
                    </div>
                </div>        

                <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name">Data structures & Algorithms</h3>
                        <span className="skills__level">Proficient</span>
                    </div>
                </div>            

    
            </div>

        </div>


    </div>

  )
}

export default Backend