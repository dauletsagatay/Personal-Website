import React from 'react';
import './skills.css';
import CProgramming from './CProgramming';
import WebDevelopment from './WebDevelopment';
import CorporateFinance from './CorporateFinance';
import ProjectManagement from './ProjectManagement';
import ManagementConsulting from './ManagementConsulting';
import Languages from './Languages';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>        
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
            <CProgramming />
            <WebDevelopment />            
            <CorporateFinance />
            <ProjectManagement />
            <ManagementConsulting />
            <Languages />
        </div>
    </section>    
  )
}

export default Skills