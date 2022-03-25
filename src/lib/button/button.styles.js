import { StyleSheet } from 'react-native';
import colors from '../../common/colors';

const styles = StyleSheet.create({
  icon:{
    marginRight: 4,
  },
  button: {
    backgroundColor: colors.button.background,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 40,
  },
  text: { 
    color: colors.button.color,
    fontSize: 16,
  }
});

export default styles;