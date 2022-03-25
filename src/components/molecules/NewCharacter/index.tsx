import { useForm } from '@hooks/useForm';
import React, { useState, FC } from 'react'
import { postCharacter } from 'src/pages/api/marvel';
import { ICharacter } from '../../../shared/interfaces';
import { Container } from './style';

interface Characters {
    characters: ICharacter[]
}

const NewCharacter = () => {

    const [valueName, handleInputChangeName] = useForm({name: ''});
    const [valueDescription, handleInputChangeDescription] = useForm({description: ''});
    const [valueUrl, handleInputChangeUrl] = useForm({url: ''});

    const onClickSave = () => {
                    // @ts-ignore

                    postCharacter({ title: valueName.name, body: valueDescription.description, image: valueUrl.url, category: 'main' })

    }

    return (
        <Container>
          <h2 style={{textAlign: 'center'}} className='title'> Nuevo Personaje </h2>
            <div> 
                <h6>Nombre</h6>  
                <input
                    type='text'
                    placeholder='Buscar'
                    className='box-search'
                    name='name'
                    // @ts-ignore
                    value={valueName.name}
                    // @ts-ignore
                    onChange={handleInputChangeName}
                    autoComplete='off'
                />
                <h6>Descripcion</h6>  
                <input
                    type='text'
                    placeholder='Buscar'
                    className='box-search'
                    name='description'
                    // @ts-ignore
                    value={valueDescription.description}
                    // @ts-ignore
                    onChange={handleInputChangeDescription}
                    autoComplete='off'
                />
                <h6>Image</h6>  
                <input
                    type='text'
                    placeholder='Buscar'
                    className='box-search'
                    name='url'
                    // @ts-ignore
                    value={valueUrl.url}
                    // @ts-ignore
                    onChange={handleInputChangeUrl}
                    autoComplete='off'
                />
                <div style={{ textAlign: 'center' }}>
                    <button onClick={onClickSave} className='button'>Guardar</button>
                    <button className='button'>Cancelar</button>
                </div>
            </div>
                
        </Container>
    )
}

export default NewCharacter
