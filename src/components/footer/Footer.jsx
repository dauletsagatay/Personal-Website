import React from 'react';
import './footer.css';
import CV from '../../assets/DS_CV.pdf';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">DS</h1>
            <ul className="footer__list">
                {/* <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>

                <li>
                    <a href="#qualification" className="footer__link">Qualification</a>
                </li>                
 */}
                <li>
                    <a href={CV} className="footer__link">CV</a>
                </li>                

                <li>
                    <a href="mailto:sagatay.daulet@gmail.com" className="footer__link">Email</a>
                </li>                
            </ul>

            <div className="footer__social">
            <a href="https://www.linkedin.com/in/dauletsagatay/" className="footer__social-link">
            <i class="bx bxl-linkedin"></i>
        </a>
        <a href="https://github.com/dauletsagatay/" className="footer__social-link">
            <i class="bx bxl-github"></i>
        </a>
            </div>

            <span className = "footer__copy">&#169; Daulet Sagatay. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer