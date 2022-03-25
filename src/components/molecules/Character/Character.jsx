import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button';
import './Character.scss';

const Character = ({ character, image, onClickErase, onClickUpdate }) => {
    return (
        <div id='ct-character-container'>
            <img
                alt={`Personaje ${character}`}
                src={image}
            />
            <div id='ct-character-intercation'>
                <label style={{color: 'white', textAlign: 'center'}}>{character}</label>
                <div id='ct-character-buttons'>
                    <Button
                        id='ct-character-edit'
                        icon='edit'
                        onClick={onClickUpdate}
                        color='white'
                    />
                    <div style={{width: 16}}/>
                    <Button
                        id='ct-character-erase'
                        icon='delete'
                        onClick={onClickErase}
                        color='white'
                    />
                </div>
            </div>
        </div>
    )
}

Character.propTypes = {
    character: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onClickErase: PropTypes.func.isRequired,
    onClickUpdate: PropTypes.func.isRequired
};

export default Character