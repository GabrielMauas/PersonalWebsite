import React from 'react';
import ProyectCard from './ProyectCard';

const Proyects = () => {


    return(
        <div className="section proyects" id="proyects">
            <h2 className='section-title'>Proyects</h2>
            <div className="proyects-container">
                <ProyectCard  
                    image="https://i.ibb.co/HrcNNdL/crudmern.png"
                    title="CRUD App"
                    text="Web App that allows to execute CRUD operations on a database. I used the MERN stack (MongoDB, Express.js, Node.js and React)."
                    link="https://github.com/GabrielMauas/crudmernapp"
                    ghLink="https://github.com/GabrielMauas/crudmernapp" 
                />
                <ProyectCard  
                    image="https://i.ibb.co/3WcTfyJ/websockets.png" 
                    title="Chat App"
                    text="Chat Web application using the Socket.io library. You can chat real time with whoever is in the server."
                    link="https://github.com/GabrielMauas/chatappws" 
                    ghLink="https://github.com/GabrielMauas/chatappws" 
                />
                <ProyectCard  
                    image="https://i.ibb.co/R3y0v9C/webrockfest.png" 
                    text="Static website I made in a JS course to learn about manipulating the DOM. It is just HTML, CSS (Sass) and JS."
                    title="Website for a rock fest"
                    link="https://festivalmusica-gm.netlify.app/" 
                    ghLink="https://github.com/GabrielMauas/webfestivalmusica" 
                />
                <ProyectCard  
                    image="https://i.ibb.co/WysbBk0/todoapp.png" 
                    text="To-Do app using React. I made this one to learn about functional components and hooks."
                    title="To-Do App"
                    link="https://todoapp2-gm.netlify.app/"
                    ghLink="https://github.com/GabrielMauas/to-do_app" 
                />
                <ProyectCard  
                    image="https://i.ibb.co/TrQtG20/peluqueriapp.png" 
                    text="Web app for a proyect I wanted to start. It is just the frontend but I will update it and also develop the backend to make it functional."
                    title="PeluqueriApp"
                    link="https://peluqueriapp.netlify.app/" 
                    ghLink="https://github.com/GabrielMauas/peluqueriapp" 
                />
                <ProyectCard  
                    image="https://i.ibb.co/gvgVqdz/netflix.png"
                    text="A copy of the Netflix Sign In page using only CSS. I saw someone making this stuff and wanted to give it a try."
                    title="Netflix Sign In Page"
                    link="https://netflixsignin-gm.netlify.app/" 
                    ghLink="https://github.com/GabrielMauas/Netflix-Sign-In-Page-by-GabrielMauas" 
                />
               
            </div>

        </div>
    )
}

export default Proyects;