import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#E8D5C4',
    borderColor: '#bdbdbd',
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    padding: 5,
  },
  image: {
    width: 100,
    minHeight: 100,
    borderRadius: 5,
    resizeMode: 'center',
  },
  bodyContainer: {
    flex: 1,
    padding: 5,
    justifyContent: 'space-between',
  },
  title: {
    textAlign: 'justify',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
  },
  price: {
    textAlign: 'right',
    fontSize: 15,
    fontStyle: 'italic',
    color: '#DC8449'
  },
});
export {styles};
