import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';

import styles from './home.styles';
import Header from '../../components/header';

import { getCharacters, getByTitle} from '../../api';
import CharacterCard from '../../components/characterCard';

const HomeScreen = () => {
  const [characters, setCharacters] = useState([]);

  const loadCharacters = async () => {
    try {
      const idAuthor = 11;
      const response = await getCharacters(idAuthor);
      setCharacters(response);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadCharacters(); 
  }, []);

  const renderCharacters = () => characters.map(character => {
    return (
      <CharacterCard
        character={character}  />
    )
  });

  const searchByTitle = async (searchTerm) => { 
    try {
      const idAuthor = 11;
      const response = await getByTitle(idAuthor, searchTerm);
      setCharacters(response);
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <View style={styles.container}>
      <Header search={searchByTitle} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" >
        {renderCharacters()}
      </ScrollView>
    </View>
  )
}

export default HomeScreen;