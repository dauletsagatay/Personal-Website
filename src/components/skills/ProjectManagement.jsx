import React from 'react'
import './skills.css';

const ProjectManagement = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Project Management - PM</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name">Waterfall</h3>
                        <span className="skills__level">Proficient</span>
                    </div>
                </div>        

                <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name">Hybrid</h3>
                        <span className="skills__level">Proficient</span>
                    </div>
                </div>            

    
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name">Agile</h3>
                        <span className="skills__level">Proficient</span>
                    </div>
                </div>        

                <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name">Scrum</h3>
                        <span className="skills__level">Proficient</span>
                    </div>
                </div>            

    
            </div>

        </div>


    </div>
    
  )
}

export default ProjectManagement