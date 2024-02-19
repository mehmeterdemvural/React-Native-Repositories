import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1},
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3,
    resizeMode: 'contain',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  bodyContainer: {padding: 10},
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'justify',
  },
  description: {textAlign: 'justify', marginVertical: 10, fontSize: 15},
  price: {
    color: '#DC8449',
    textAlign: 'right',
    marginVertical: 10,
    fontSize: 15,
  },
});

export {styles};
