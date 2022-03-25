import React from 'react';
import { AvengerSreen } from './src/screens/AvengerScreen';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, flexDirection: 'column', backgroundColor: '#e2e2e2' }}>
      <Text style={ styles.text }>
        Listado de Personajes
      </Text>
      <AvengerSreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 20,
      margin: 10
  }
})


export default App;
