import React from 'react';
import { StyleSheet, View } from 'react-native';
import MarvelList from './src/components/marvelList';

export default function App() {
  
  return (
    <View style={styles.container}>
      <MarvelList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
});
