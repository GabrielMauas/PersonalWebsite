import React from 'react';
import ProyectCard from './ProyectCard';

const Proyects = () => {


    return(
        <div className="section proyects" id="proyects">
            <h2 className='section-title'>Proyects</h2>
            <div className="proyects-container">
                <ProyectCard  
                    image="https://ibb.co/gjBDrGt"
                    title="Task List App"
                    text="Made with React using the Chakra UI library for the fist time. It uses localStorage to store the tasks. It also has dark mode option."
                    link="https://tasklist-app.vercel.app/"
                    ghLink="https://github.com/GabrielMauas/TaskList-App" 
                />
                <ProyectCard  
                    image="https://i.ibb.co/jwgf1ff/todoapp.png"
                    title="To-Do App"
                    text="Web App that allows to execute CRUD operations on a database. I used the MERN stack (MongoDB, Express.js, Node.js and React)."
                    link="https://gm-todoapp.netlify.app/"
                    ghLink="https://github.com/GabrielMauas/to-do_MERNapp" 
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
                    image="https://i.ibb.co/MD0MLmt/gmauas-vercel-app.png" 
                    text="Personal Responsive Website using React."
                    title="Personal Website"
                    link="https://gmauas.vercel.app/"
                    ghLink="https://github.com/GabrielMauas/PersonalWebsite"
                />
               
            </div>

        </div>
    )
}

export default Proyects;