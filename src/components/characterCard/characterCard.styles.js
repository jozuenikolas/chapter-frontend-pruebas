import { StyleSheet } from 'react-native';
import colors from '../../common/colors';

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    flex: 1,
    width: '100%',
    height: 340, 
    borderColor: '#F9F9F9',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  cardImage: {
    backgroundColor: 'black',
    flex: 1,
    width: '100%',
    position: 'relative',
  },
  cardDetails: {
    flex: 1,
    width: '100%',
    position: 'relative',
    padding: 16,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  buttonsPanel: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 16,
    width: '100%',
  },
  button: {
    backgroundColor: '#F9F9F9',
    width: '40%'
  },
  buttonFont: {
    color: 'red',
  },
  detailsTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  detailsBody: {
    fontSize: 24,
  },
  comeBackButton: {
    backgroundColor: 'blue', 
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  comeBackButtonText: { 
    color: 'white'
  }
});

export default styles;