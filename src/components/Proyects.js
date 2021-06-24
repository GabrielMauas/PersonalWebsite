import React from 'react';
import ProyectCard from './ProyectCard';

const Proyects = () => {


    return(
        <div className="section proyects" id="proyects">
            <h2 className='section-title'>Proyects</h2>
            <div className="proyects-container">
                <ProyectCard  
                    image="https://picsum.photos/300/150"
                    title="Crud App"
                    text="Web App made using the MERN stack. It allows to manipulate a database."
                    link="https://www.google.com" 
                    ghLink="https://www.google.com" 
                />
                <ProyectCard  
                    image="https://picsum.photos/300/150" 
                    title="Chat App"
                    text="Web App made using the MERN stack. It allows to manipulate a database."
                    link="https://www.google.com" 
                    ghLink="https://www.google.com" 
                />
                <ProyectCard  
                    image="https://picsum.photos/300/150" 
                    text="Web App made using the MERN stack. It allows to manipulate a database."
                    title="Website for a rock fest"
                    link="https://www.google.com" 
                    ghLink="https://www.google.com" 
                />
                <ProyectCard  
                    image="https://picsum.photos/300/150" 
                    text="Web App made using the MERN stack. It allows to manipulate a database."
                    title="To-Do App"
                    link="https://www.google.com" 
                    ghLink="https://www.google.com" 
                />
                <ProyectCard  
                    image="https://picsum.photos/300/150" 
                    text="Web App made using the MERN stack. It allows to manipulate a database."
                    title="PeluqueriApp"
                    link="https://www.google.com" 
                    ghLink="https://www.google.com" 
                />
                <ProyectCard  
                    image="https://picsum.photos/300/150" 
                    text="Web App made using the MERN stack. It allows to manipulate a database."
                    title="Netflix Sign In Page"
                    link="https://www.google.com" 
                    ghLink="https://www.google.com" 
                />
               
            </div>

        </div>
    )
}

export default Proyects;