import React, { useEffect, useRef, useState } from 'react';
import { deleteCharacter, getCharacter } from '../../api';
import Button from '../../components/Button/Button';
import Character from '../../components/Character/Character';
import Input from '../../components/Input';
import { HOME_PAGE_HEADER } from '../../utils/texts';
import './HomePage.scss';

const HomePage = () => {

  const [characters, setCharacters] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [showEditor, setShowEditor] = useState(false);
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const componentIsMounted = useRef(true);

  const getCharacters = async (name) => {
    const {data} = await getCharacter(name);
    if(componentIsMounted.current) {
      setCharacters(data);
    }
  }

  const deleteCharacterById = async (id) => {
    const {status} = await deleteCharacter(id);
    if(status === 200) {
      let currentCharacters = [...characters];
      const index = currentCharacters.find(element => element._id === id)
      currentCharacters.splice(index, 1);
      console.log(currentCharacters);
      setCharacters(currentCharacters);
    }
  }

  useEffect(() => {
    getCharacters();
    return () => {
      componentIsMounted.current = false
    }
  }, [])

  useEffect(() => {
    getCharacters(searchText);
  }, [searchText])
  
  const renderCharacter = (item, index) => {
    return <div className='characters-section' key={`character${index}`}>
      <Character name={item.title} 
        image={item.image}
        editAction={() => {}}
        deleteAction={() => {
          deleteCharacterById(item._id);
        }}
      />
      {index < characters.length - 1 && <div className='spacer' />}
    </div>
  }

  return (
    <div className='home-page-component' data-testid="HomePageId">
      <div className='spacer'/>
      <div className='header-section'>
        <div className='header'>
          <span>{HOME_PAGE_HEADER}</span>
        </div>
      </div>
      <div className='spacer'/>
      <div className='actions-section'>
        <div className='input'>
          <Input icon={"search"} iconColor={"grey"} placeholder={"Buscar"} onInput={setSearchText} /> 
        </div>
        <div className='spacer'/>
        <div className='button'>
          <Button text={"Nuevo"} icon="add" />
        </div>
      </div>
      <div className='spacer'/>
      {characters.map((item, index) => renderCharacter(item, index))}
      <div className='spacer'/>
    </div>
  )
}

export default HomePage