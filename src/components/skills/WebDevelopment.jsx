import React from 'react'
import './skills.css';

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Web Development</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name">HTML & CSS</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>        

                <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name">Javascript</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>                
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name">React</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>        

                <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name">Git</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>               
            </div>

        </div>


    </div>
  )
}

export default Frontend