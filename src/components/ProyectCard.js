import React from 'react';

const ProyectCard = (props) => {

    const {link, ghLink, image, text, title} = props

    return(

        <div className='pr-card' style={{backgroundImage: `url(${image})`}}>
            <div className='pr-info'>
                <h3 className='pr-title'>{title}</h3>
                <p className='pr-descr'>{text}</p>
                <div className='pr-links'>
                    <a href={ghLink} target="_blank" rel="noreferrer"><i className='bx bxl-github pr-link'></i></a>
                    <a href={link} target="_blank" rel="noreferrer"><i className='bx bx-link-external pr-link'></i></a>
                </div>
            </div>
        </div>
    )
}

export default ProyectCard;