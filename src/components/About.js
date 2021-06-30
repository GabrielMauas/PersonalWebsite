import React from 'react';

const About = () => {


    return(
        <div>
            <section className="section about" id="about">

                    <h2 className="section-title about-title">About</h2>
                    <div className="about-content">
                        <h3 className="about-subtitle">A little about me...</h3>
                        <p className="about-text">
                            I am a self-taught developer with one year of experience based in Buenos Aires, Argentina. I like to 
                            describe myself as an easy adapter and fast learner too. I'm interested on the entire process of a 
                            proyect so I can develop both frontend and backend. I think that for every problem there's a solution 
                            so anything can be solved using logic and inventiveness.
                        </p>
                        <ul className="about-links">
                            <a href="https://github.com/GabrielMauas" target="_blank" rel="noreferrer"><i className="bx bxl-github"></i></a>
                            <a href="https://twitter.com/MauasGabriel" target="_blank" rel="noreferrer"><i className="bx bxl-twitter"></i></a>
                            <a href="https://www.linkedin.com/in/gabriel-mauas-928a171a4/" target="_blank" rel="noreferrer"><i className="bx bxl-linkedin"></i></a>
                            <a href="https://wa.link/n6q3j6" target="_blank" rel="noreferrer"><i className="bx bxl-whatsapp"></i></a>
                          
                        </ul>
                    </div>

            </section>
        </div>
    )
}

export default About;