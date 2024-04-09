import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#7DB9B6'},
  lottieContainer: {
    flex: 2,
    width: Dimensions.get('window').width,
  },
  titleContainer: {flex: 1, justifyContent: 'center', padding: 10},
  title: {
    color: '#4D455D',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 20,
    textAlign: 'center',
  },
  text: {
    color: '#4D455D',
    textAlign: 'justify',
    marginTop: 30,
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCFFE7',
    borderRadius: 10,
    height: 50,
    width: 150,
  },
  buttonText: {padding: 10, color: '#4D455D', fontWeight: 'bold'},
});

export {styles};
