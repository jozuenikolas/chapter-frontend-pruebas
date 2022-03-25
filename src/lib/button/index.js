import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './button.styles';

const Button = ({ label, iconName, onClick, style = {}, fontStyle = {} }) => {
  const renderIcon = () => {
    const color = fontStyle?.color || 'white';
    return iconName && (
      <Icon style={styles.icon} name={iconName} color={color} size={16} />
    )
  }

  const renderLabel = () => label && (
    <Text style={{
      ...styles.text,
      ...fontStyle,
    }}>{label}</Text>
  )

  return (
    <TouchableOpacity style={{
      ...styles.button,
      ...style
    }} click={onClick}>
      {renderIcon()}
      {renderLabel()}
    </TouchableOpacity>
  )
}

export default Button;
