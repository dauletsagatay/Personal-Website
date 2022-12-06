import React from 'react'
import './skills.css';

const CorporateFinance = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Corporate Finance</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name">Financial modeling</h3>
                        <span className="skills__level">Proficient</span>
                    </div>
                </div>        

                <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name">Due Diligence</h3>
                        <span className="skills__level">Proficient</span>
                    </div>
                </div>            

            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name">Econometrical modeling</h3>
                        <span className="skills__level">Competent</span>
                    </div>
                </div>        

                <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name">Valuation</h3>
                        <span className="skills__level">Proficient</span>
                    </div>
                </div>            

            </div>



        </div>


    </div>
    
  )
}

export default CorporateFinance