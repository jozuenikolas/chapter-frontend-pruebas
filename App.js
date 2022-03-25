import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';

import HomeScreen from './src/screens/home';

const App = () => {

  const backgroundStyle = {
    backgroundColor: '#FFFFFF',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}> 
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
