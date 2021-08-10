import React from 'react';

const About = () => {


    return(
        <div>
            <section className="section about" id="about">

                    <h2 className="section-title about-title">Sobre Mi</h2>
                    <div className="about-content">
                        <h3 className="about-subtitle">Un poco sobre mi...</h3>
                        <p className="about-text">
                            Soy desarrollador de software desde principios de 2020 y estudiante de Sistemas en la Universidad de Palermo. Tengo 20 años y vivo en Buenos Aires, Argentina.
                            Me caracterizo por mi facilidad para adaptarme y de obsorber nuevos conocimientos. Me interesa todo el proceso de desrrollo de un proyecto por lo que puedo programar
                            tanto el Frontend como el Backend de una aplicación.
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