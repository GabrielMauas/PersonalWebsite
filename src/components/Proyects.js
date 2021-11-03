import React from 'react';
import ProyectCard from './ProyectCard';

const Proyects = () => {


    return(
        <div className="section proyects" id="proyects">
            <h2 className='section-title'>Proyectos</h2>
            <div className="proyects-container">
                <ProyectCard  
                    image="https://i.ibb.co/r71ZQg5/Tasklist-app.png"
                    title="Task List App"
                    text="Aplicación web para registrar y eliminar tareas. Está desarrollada con React utlizando la librería Chakra UI. Las tareas se almacenan en el LocalStorage. 
                        También posee una opcíon para cambiar el tema de claro a oscuro."
                    link="https://tasklist-app.vercel.app/"
                    ghLink="https://github.com/GabrielMauas/TaskList-App" 
                />
                <ProyectCard  
                    image="https://i.ibb.co/jwgf1ff/todoapp.png"
                    title="To-Do App"
                    text="Mi primera aplicación utlizando el Stack MERN (MongoDB, Express, React, Nodejs). Permite realizar operaciones CRUD en una base de datos no relacional.
                        El front está hecho con React y Chakra UI y la API con Nodejs y Express. El servidor está desplegado en Heroku."
                    link="https://gm-todoapp.vercel.app/"
                    ghLink="https://github.com/GabrielMauas/to-do_MERNapp" 
                />
                {/* <ProyectCard  
                    image="https://i.ibb.co/3WcTfyJ/websockets.png" 
                    title="Chat App"
                    text="Aplicación de Chat en tiempo real utlizando la librería Socket.io. El servidor no está desplegado actualmente pero se puede ver el código en el repositorio."
                    link="https://github.com/GabrielMauas/chatappws" 
                    ghLink="https://github.com/GabrielMauas/chatappws" 
                /> */}
                {/* <ProyectCard  
                    image="https://i.ibb.co/R3y0v9C/webrockfest.png" 
                    text="Sitio web estático hecho en un curso para aprender las bases de HTML, CSS y manipular el DOM con JavaScript. Aprendí sobre el manejo de eventos y agregar componentes al HTML de forma dinámica."
                    title="Sitio web básico"
                    link="https://festivalmusica-gm.netlify.app/" 
                    ghLink="https://github.com/GabrielMauas/webfestivalmusica" 
                /> */}
                <ProyectCard  
                    image="https://i.ibb.co/MD0MLmt/gmauas-vercel-app.png" 
                    text="Sitio Web personal (el que estás viendo) hecho con React."
                    title="Sitio Personal"
                    link="https://gmauas.vercel.app/"
                    ghLink="https://github.com/GabrielMauas/PersonalWebsite"
                />
                <ProyectCard  
                    image="https://i.ibb.co/zH3rJqL/gmdigital.png" 
                    text="Sitio Web para agencia digital, aún en producción. Desarrollado con Next.js y SASS."
                    title="Sitio para Agencia Digital"
                    link="https://gmdigital.vercel.app/"
                    ghLink="https://github.com/GabrielMauas/digitalagencyweb"
                />
                {/* <ProyectCard  
                    image="https://i.ibb.co/zH3rJqL/gmdigital.png" 
                    text="Sitio Web para agencia digital, aún en producción. Desarrollado con Next.js y SASS."
                    title=""
                    link="https://gmdigital.vercel.app/"
                    ghLink="https://github.com/GabrielMauas/digitalagencyweb"
                /> */}
                
                <div className='pr-card'>
                    <div className='pr-info'>
                        <h3 className="pr-title">Proximamente</h3>
                        <p className="pr-descr">Estoy desarrollando nuevos proyectos para seguir aprendiendo y perfeccionando. Volvé pronto!</p>
                    </div>
                </div>
               
            </div>

        </div>
    )
}

export default Proyects;