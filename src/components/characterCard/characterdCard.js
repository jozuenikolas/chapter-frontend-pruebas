import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';

import Button from '../../lib/button';

import styles from './characterCard.styles';

const CharacterCard = ({ character, getCharacterDetails, details }) => {
  const { image, title, category, body } = character;
  const [selected, setSelected] = useState(false);

  const selectCard = () => {
    setSelected(!selected);
  };

  const renderImage = () => <TouchableOpacity style={styles.cardImage} onPress={selectCard}>
    <Image
      style={styles.image}
      source={{
        uri: image
      }} /><View style={styles.buttonsPanel}>
      <Button style={styles.button} iconName="movie-edit-outline" fontStyle={styles.buttonFont} />
      <Button style={styles.button} iconName="delete-outline" fontStyle={styles.buttonFont} />
    </View>
  </TouchableOpacity>

  const renderDetails = () => {
    return <View style={styles.cardDetails}  >
      <Text style={styles.detailsTitle}>{title}</Text>
      <Text style={styles.detailsBody}>Category: {category}</Text>
      <Text style={styles.detailsBody}>{body}</Text>
      <TouchableOpacity style={styles.comeBackButton} onPress={selectCard} >
        <Text style={styles.comeBackButtonText}>Regresar</Text>
      </TouchableOpacity>
    </View>
  }

  return (
    <View style={styles.container}>
      {!selected && renderImage()}
      {selected && renderDetails()}
    </View>
  )
}

export default CharacterCard;
