import React, { useState, useEffect } from 'react'
import { StyleSheet, Platform, SafeAreaView } from 'react-native'
import { getCharacters } from './src/api/marvel.api';
import { CharacterList } from './src/modules/character-list/character-list';
import { Header } from './src/modules/header/header'


export default function App() {

  const [modalVisible, setModalVisible] = useState(false)
  const [characters, setCharacters] = useState(() => [])

  const handleRequest = async () => {
    console.log('request...');
    const response = await getCharacters()
    setCharacters(response)
  }

  useEffect(() => {
    handleRequest()
  }, [modalVisible])

  const headerProps = {
    modalVisible,
    setModalVisible
  }

  const characterList = {
    characters
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header {...headerProps} />
      <CharacterList {...characterList} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#F6F6F6',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  }
});
