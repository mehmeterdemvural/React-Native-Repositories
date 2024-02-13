import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  description: {
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'justify',
  },
  author: {
    fontStyle: 'italic',
    textAlign: 'right',
    marginBottom: 5,
    marginRight: 5,
  },
});

export default styles;
