import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7DB9B6',
  },
  headerContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    padding: 10,
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4D455D',
    marginLeft: 20,
  },
  bodyContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'felx-start',
    alignItems: 'left',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    width: 100,
    color: '#4D455D',
    margin: 5,
  },
  textSeparator: {
    fontSize: 18,
    color: '#4D455D',
    margin: 5,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: '#4D455D',
    margin: 5,
  },
});

export {styles};
