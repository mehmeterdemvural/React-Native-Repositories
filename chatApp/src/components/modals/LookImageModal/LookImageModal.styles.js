import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const styles = StyleSheet.create({
  modal: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    margin: 0,
    padding: 15,
  },

  image: {
    borderRadius: 10,
    resizeMode: 'contain',
    width: '100%',
    height: '50%',
  },
});

export {styles};
