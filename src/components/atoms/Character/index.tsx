import React, { useState, FC } from 'react'

import { ICharacter } from '../../../shared/interfaces';
import { Container } from './style';

interface Character {
    character: ICharacter
}

const Character: FC<Character> = ({ character }) => {


    return (
        <Container>
            

        <img style={{width: 300}} src={character.image} alt={character.title} />

        <div className='name'>{character.title}</div>
        <div className='buttons'>  
        <button className='button-secundary'>Nuevo</button>
        <button className='button-secundary'>Nuevo</button>
        </div>
        </Container>
    )
}

export default Character
