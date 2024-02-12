import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  modal: {margin: 0, justifyContent: 'flex-end'},
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    height: '20%',
    width: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 10,
  },
});
