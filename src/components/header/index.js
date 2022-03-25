import React from 'react';
import { Text, TextInput, View } from 'react-native';

import Search from './search';

import styles from './header.styles';
import strings from '../../common/strings';

const Header = ({ search}) => {
  return (
    <View style={styles.container}>
      <Text onChange={search} style={styles.title}>{strings.home.title}</Text>
      <Search />
    </View>
  )
}

export default Header;
