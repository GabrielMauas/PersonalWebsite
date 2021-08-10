import React from 'react';

const Skills = () => {

    return(
        <div className="">
            <section className="section skills" id="skills">
                <h2 className="section-title">Skills</h2>
                <div className="skills-container">
                
                    <h3 className="skills-title"><i className="bx bx-code"></i>Desarrollo</h3>
                    <div className="skills-list">
                        <p className="skills-item"><i className="bx bxl-html5"></i>HTML</p>
                        <p className="skills-item"><i className="bx bxl-css3"></i>CSS</p>
                        <p className="skills-item"><i className="bx bxl-javascript"></i>JavaScript</p>
                        <p className="skills-item"><i className="bx bxl-react"></i>React</p>
                        <p className="skills-item"><i className="bx bxl-nodejs"></i>NodeJS</p>
                        <p className="skills-item"><i className="bx bxl-python"></i>Python</p>
                        <p className="skills-item"><i className="bx bx-code-block"></i>PHP</p>
                        <p className="skills-item"><i className="bx bxs-data"></i>MySQL</p>
                        <p className="skills-item"><i className="bx bx-data"></i>MongoDB</p>
                        <p className="skills-item"><i className="bx bxl-git"></i>Git</p>
                    </div>
                    <h3 className="skills-title"><i className="bx bx-world"></i>Idiomas</h3>
                    <div className="skills-list"> 
                        <p className="skills-item"><i className="bx bxs-message-rounded-detail"></i>Español</p>
                        <p className="skills-item"><i className="bx bxs-message-rounded-detail"></i>English (avanzado)</p>
                    </div>

                    
               
                </div>
            </section>

        </div>
    )
}

export default Skills;