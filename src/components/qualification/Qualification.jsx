import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }


  return (
    <section className="qualification section" id = "qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex" }
                onClick = {() => toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education                   
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex" }
                onClick = {() => toggleTab(2)}
                >                    
                <i className="uil uil-briefcase-alt qualification__icon"></i> Experience                  
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Wed Development Bootcamp</h3>
                            <span className="qualification__subtitle">The App Brewery - London, UK</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i> 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">BSc Economice and Finance</h3>
                            <span className="qualification__subtitle">University of Exeter - Exeter, UK</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i> 2012 - 2016
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">BSc Computer Science</h3>
                            <span className="qualification__subtitle">KBTU - Kazakhstan</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i> 2011 - 2012
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Finance & Strategy Advisor</h3>
                            <span className="qualification__subtitle">IMB Center - Kazakhstan</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i> 2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Senior Manager</h3>
                            <span className="qualification__subtitle">AIFC - Kazakhstan</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i> 2020 - 2021
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Project Manager</h3>
                            <span className="qualification__subtitle">CSI - Kazakhstan</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i> 2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Consultant</h3>
                            <span className="qualification__subtitle">Deloitte - Russia</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i> 2021 - Present
                            </div>
                        </div>

                    </div>

                </div>
                
            </div>                            

        </div>
    </section>    
  )
}

export default Qualification