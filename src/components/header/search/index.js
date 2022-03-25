import React from 'react';
import { TextInput, View } from 'react-native';
import Button from '../../../lib/button'

import styles from './search.styles';
import strings from  '../../../common/strings'

const Search = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder="Buscar" />
      <Button iconName="plus" style={styles.button} label={strings.search.button} />
    </View>
  )
}

export default Search;
