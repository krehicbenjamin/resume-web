import React, { Component } from 'react';

class PageContent extends Component {
    
    render() { 
        return ( 
            <div className="container-fluid p-0">
            
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Krehic
                        <span className="text-primary">Benjamin</span>
                    </h1>
                    <div className="subheading mb-5">
                        Samira Catovica Kobre 19 · (+387) 62 516 998 ·
                        <a href="mailto:krehicbenjamin@gmail.com">krehicbenjamin@gmail.com</a>
                    </div>
                    <p className="lead mb-5">Extremely motivated and determined to learn new skills and technologies!</p>
                    <div className="social-icons">
                        
                        <a className="social-icon" href="https://github.com/krehicbenjamin"><i className="fab fa-github"></i></a>
                        
                        <a className="social-icon" href="https://www.facebook.com/SleepingWish/"><i className="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            
            <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2 className="mb-5">Experience</h2>
                    
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Web Developer</h3>
                            <div className="subheading mb-3">Personal projects</div>
                            <p>Personal projects of a wide variety as I was learnin ReactJS (self-taught)</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">December 2019 - Present</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0"> Web Developer</h3>
                            <div className="subheading mb-3">School projects</div>
                            <p>Making simple projects in HTML, CSS, JavaScript and PHP</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">September 2017 - Present</span></div>
                    </div>
                    
                </div>
            </section>
            <hr className="m-0" />
  
            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">International Burch University</h3>
                            <div className="subheading mb-3">Bachelor of Science</div>
                            <div>Computer Science</div>
                            
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">September 2019 - Estimated January 2022</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Srednja Elektrotehnicka skola Sarajevo</h3>
                            <div className="subheading mb-3">Informatika i Racunarstvo (IT)</div>
                            
                        </div>
                        
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            
            <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-3">Programming Languages & Tools</div>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                        <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                        <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
                        <li className="list-inline-item"><i className="fab fa-react"></i></li>
                        <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
                        <li className="list-inline-item"><i className="fab fa-java"></i></li>
                        <li className="list-inline-item"><i className="fab fa-wordpress"></i></li>
                        <li className="list-inline-item"><i className="fab fa-php"></i></li>
                        <li className="list-inline-item"><i className="fab fa-npm"></i></li>
                    </ul>
                    
                </div>
            </section>
            <hr className="m-0" />
            
            <section className="resume-section" id="interests">
                <div className="resume-section-content">
                    <h2 className="mb-5">Interests</h2>
                    <p>Apart from being a want to be web developer, I enjoy learning new skills, like my personal goal to learn SwiftUI to make iOS/iPadOS/macOS apps. I love playing competitive sports like Handball and Basketball as I have a really competitive nature in sports as I do in Web Development.</p>
                    
                </div>
            </section>
            <hr className="m-0" />
            
            <section className="resume-section" id="awards">
                <div className="resume-section-content">
                    <h2 className="mb-5">Awards & Certifications</h2>
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                            C1 level English Certificate (Altera Lingua)
            
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                            SSST Winter Academy 2015 - Computer and Information Systems 
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                            2
                            <sup>nd</sup>
                            Place project in section "Cross platform app development"- International University of Sarajevo 
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                            
                            Certificate for competition of "Cross platform app development" at GeekFEST in International University of Sarajevo
                        </li>
                        
                    </ul>
                </div>
            </section>
        </div>
         );
    }
}
 
export default PageContent;