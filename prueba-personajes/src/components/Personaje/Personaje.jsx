import React from 'react';
import PropTypes from 'prop-types';
import './Personaje.css'

const Personaje = ({ id, title, image }) => {
  return (
    <div id={id} data-testid="personajeTestId" className='personaje_container'>
      <img data-testid="personajeImageTestId" src={image} alt={title} />
      <div className='crud_container'>
        <h3 id='titlePersonajeId'>{title}</h3>
        <button className='button' variant="text">
          <pichincha-icon data-testid="iconButton01Id" size="15px" color='danger'>
            edit
          </pichincha-icon>
        </button>
        <button className='button' variant="text" type='button' color='danger'>
          <pichincha-icon data-testid="iconButton02Id" size="15px" color='danger'>
            delete
          </pichincha-icon>
        </button>
      </div>
    </div>
  )
}

Personaje.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  image: PropTypes.string.isRequired,
  category: PropTypes.string,
  idAuthor: PropTypes.string,
}

export default Personaje;