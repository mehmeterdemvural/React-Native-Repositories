import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width,
    overflow: 'hidden',
    margin: 0,
    padding: 0,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width,
  },
});

export default styles;
