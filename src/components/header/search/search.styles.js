import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row',
    marginBottom: 8,
    justifyContent: 'space-between', 
  },
  textInput: { 
    marginRight: 8,
    width: 200,
  },
  button: { 
    height: 48,
    width: 100,
  }
});

export default styles;